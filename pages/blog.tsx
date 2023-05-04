import { getPostIds, getPostMetadata, PostData } from "@/utils/BlogPostData";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      posts: await Promise.all(
        (
          await getPostIds()
        ).map(
          async (id) =>
            await getPostMetadata(id).then((data) => ({ id, ...data }))
        )
      ),
    },
  };
}

export default function Blog({
  posts,
}: {
  posts: (PostData & { id: string })[];
}) {
  return (
    <div className="page">
      <Head>
        <title>Blog | ACM Cyber at UCLA</title>
      </Head>
      <h1>Blog</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>by {post.authors.join(", ")}</p>
            <p>tags: {post.tags.map((x) => `[${x}]`).join(" ")}</p>
            <Link href={`/blog/${post.id}`}>Read More &raquo;</Link>
          </div>
        );
      })}
    </div>
  );
}
