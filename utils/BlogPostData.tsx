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
  // Use gray-matter to parse the post metadata section
  return matter(fileContents).data as PostData;
}

export interface PostData {
  title: string;
  authors: string[];
  date: string;
  category: string;
  tags: string[];
  description: string;
  contentHtml: string;
  image?: OpenGraphMedia;
}
