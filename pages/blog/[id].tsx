import * as fs from "node:fs/promises";
import path from "node:path";
// @ts-ignore
import { marked } from "marked";
import hljs from "highlight.js";
import matter from "gray-matter";
import styles from "@/styles/Post.module.scss";
import { GetStaticPropsContext } from "next";
import { getPostIds, PostData, POSTS_DIRECTORY } from "@/utils/BlogPostData";
import { useEffect } from "react";

export async function getStaticPaths() {
  return {
    paths: (await getPostIds()).map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  async function getPostData(id: string) {
    const fullPath = path.join(process.cwd(), POSTS_DIRECTORY, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const contentHtml = marked(matterResult.content);

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

export default function Post({ postData }: { postData: PostData }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className={`page ${styles.post}`}>
      <div className={styles.categorydate}>
        <p className={styles.alignleft}>{postData.category}</p>
        <p className={styles.alignright}>{postData.date}</p>
      </div>
      <h1>{postData.title}</h1>
      <img
        src="https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg"
        alt="blog image"
      />
      <div>
        <p>
          <i>Written by {postData.authors.join(", ")}</i>
        </p>
        <p className={styles.tags}>Tags: {postData.tags.join(", ")}</p>
        <div className={styles.postContent}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </div>
  );
}
