import { GetStaticPaths } from "next";

export const BlogPostSlugs = ["/blog/2023-01-02-firstpost"]; //async hard to use for button. Sad.

export const getBlogPostSlugs: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: BlogPostSlugs,
    fallback: "blocking", //indicates the type of fallback
  };
};
