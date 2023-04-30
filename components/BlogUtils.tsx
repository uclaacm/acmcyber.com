import { GetStaticPaths } from "next";

export const getBlogPostSlugs: GetStaticPaths<{ slug: string }> = async () => {
  const paths = await getBlogPostPaths();
  return {
    paths,
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getBlogPostPaths(): Promise<PathSlug[]> {
  return await fetch("/api/blog-paths")
    .then((res) => res.json())
    .then((json) =>
      json.paths.map((path: string) => ({ params: { slug: path } }))
    )
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export interface PathSlug {
  params: {
    slug: string;
  };
}
