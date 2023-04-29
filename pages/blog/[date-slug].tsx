import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";
import { GetStaticPaths } from "next";
import styles from "@/styles/Blog.module.scss";
import Navbar from "../../components/Navbar";

const POSTS_DIRECTORY = "/data/blog/";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: ["/blog/2023-01-02-firstpost"],
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps() {
  async function getPostData(name: String) {
    const fs = require("fs");
    const fullPath = path.join(process.cwd() + POSTS_DIRECTORY, `${name}.md`);
    const fileContents = await fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      name,
      contentHtml,
      ...matterResult.data,
    };
  }

  const postData = await getPostData("2023-01-02-firstpost");

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
    <div>
      <Navbar />
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
