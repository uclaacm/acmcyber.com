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
import CyberSeo from "@/components/CyberSeo";
import Link from "next/link";

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
    let dateStr = fullPath
      .split("/")
      [fullPath.split("/").length - 1].split("-")
      .slice(0, 3);
    let dateArr = new Date(`${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`)
      .toDateString()
      .split(" ");
    let date = `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const contentHtml = marked(matterResult.content);

    // Combine the data with the id and contentHtml
    return {
      name: id,
      date: date,
      contentHtml: contentHtml,
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
    <>
      <CyberSeo
        title={postData.title}
        description={postData.description}
        images={
          postData.image === null || postData.image === undefined
            ? undefined
            : [postData.image]
        }
      />

      <div className={`page ${styles.post}`}>
        <Link href="/blog">
          <span className={styles.category}>{postData.category}</span>
        </Link>
        <h1>{postData.title}</h1>
        <div className={styles.categorydate}>
          <p className={styles.alignleft}>
            <i>By {postData.authors.join(", ")}</i>
          </p>
          <p className={styles.alignright}>{postData.date.toString()}</p>
        </div>
        <div>
          <p className={styles.tags}>
            Tags:{" "}
            {postData.tags.map((tag) => (
              <span className={styles.tag}>{tag}</span>
            ))}
          </p>
          <p className={styles.description}>
            <i>{postData.description}</i>
          </p>
          <hr />

          <div className={styles.postContent}>
            {postData.contentHtml !== undefined ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: String(postData.contentHtml),
                }}
              />
            ) : (
              "No post content found."
            )}
          </div>
        </div>
      </div>
    </>
  );
}
