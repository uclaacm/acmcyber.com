import * as fs from "node:fs/promises";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import styles from "@/styles/Blog.module.scss";
import React from "react";
import { GetStaticPropsContext } from "next";

const POSTS_DIRECTORY = "/data/blog/";

export async function getStaticPaths() {
  return {
    paths: (await fs.readdir(path.join(process.cwd(), POSTS_DIRECTORY)))
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => ({ params: { id: path.basename(filename, ".md") } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  async function getPostData(id: string) {
    const fullPath = path.join(process.cwd(), POSTS_DIRECTORY, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      name: id,
      contentHtml,
      ...matterResult.data,
    };
  }

  const id = context.params!!["id"]!!;
  if (id instanceof Array) {
    throw "Refusing to render multiple blog posts at once (this should never occur)!";
  }

  const postData = await getPostData(id);

  return {
    props: {
      postData,
    },
  };
}

interface PostData {
  title: string;
  authors: string[];
  date: string;
  tags: string[];
  contentHtml: string;
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <div className="page">
      <div className={styles.md}>
        <h1>{postData.title}</h1>
        <p>Written by {postData.authors.join(", ")}</p>
        <p>{postData.date}</p>
        <p>{postData.tags.join(", ")}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
}

// Can use:
// postData.title
// postData.date
// postData.authors: ['Marius']
// postData.tags: ['Test', 'Useless']
// postData.snippet: 'This is the first post'
// postData.preview: "https://www.images.com/dog.png"

// TODO
// uses dangerouslySetInnerHTML, might switch to something else
