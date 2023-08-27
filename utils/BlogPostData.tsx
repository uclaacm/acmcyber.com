import * as fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { OpenGraphMedia } from "next-seo/lib/types";

export const POSTS_DIRECTORY = "/data/blog/";

export async function getPostIds(): Promise<string[]> {
  return (await fs.readdir(path.join(process.cwd(), POSTS_DIRECTORY)))
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => path.basename(filename, ".md"));
}

export async function getPostMetadata(id: string): Promise<PostData> {
  const fullPath = path.join(process.cwd(), POSTS_DIRECTORY, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    let dateStr = fullPath.split("/")[fullPath.split("/").length - 1].split("-").slice(0, 3);
    let dateArr = new Date(`${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`).toDateString().split(" ");
    let date = `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents).data as PostData;

    let authors = matterResult.authors.join(", ");
    if (authors.length >= 30) {
      authors = authors.slice(0, 26)
      authors += " ...";
    }
    let authorsArr = authors.split(", ");

    if (matterResult.image !== undefined) {
      return {
        title: matterResult.title,
        authors: authorsArr,
        date: date,
        category: matterResult.category,
        tags: matterResult.tags,
        description: matterResult.description,
        image: matterResult.image,
      };
    }

    // Combine the data with the id and contentHtml
    return {
      title: matterResult.title,
      authors: authorsArr,
      date: date,
      category: matterResult.category,
      tags: matterResult.tags,
      description: matterResult.description,
    };
}

export interface PostData {
  title: string;
  authors: string[];
  date: string;
  category: string;
  tags: string[];
  description: string;
  contentHtml?: string;
  image?: OpenGraphMedia;
}
