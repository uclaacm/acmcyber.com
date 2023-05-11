import * as fs from "node:fs/promises";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import styles from "@/styles/Post.module.scss";
import { GetStaticPropsContext } from "next";
import { getPostIds, PostData, POSTS_DIRECTORY } from "@/utils/BlogPostData";
import Image from "next/image";

import stinkyimage from "https://reciprocity.com/wp-content/uploads/2021/08/blog_what-is-cybersecurity-framework_featured-img_730x270.jpg";

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

export default function Post({ postData }: { postData: PostData }) {
  return (
    <div className={`page ${styles.post}`}>
      <div className={styles.categorydate}>
        <p className={styles.alignleft}>placeholder</p>
        <p className={styles.alignright}>{postData.date}</p>
      </div>
      <h1>{postData.title}</h1>
      <img
        className={styles.centerImage}
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

// Can use:
// postData.title
// postData.date
// postData.authors: ['Marius']
// postData.tags: ['Test', 'Useless']
// postData.snippet: 'This is the first post'
// postData.preview: "https://www.images.com/dog.png"

// TODO
// uses dangerouslySetInnerHTML, might switch to something else
