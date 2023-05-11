import { getPostIds, getPostMetadata, PostData } from "@/utils/BlogPostData";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Blog.module.scss";

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
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className={styles.blogPost}>
              <h3>{post.title}</h3>
              <p>by {post.authors.join(", ")}</p>
              <p className={styles.tags}>
                Tags:{" "}
                {post.tags.map((x) => (
                  <span className={styles.tag}>{x}</span>
                ))}
              </p>
              <Link href={`/blog/${post.id}`}>Read More &raquo;</Link>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
