import Link from "next/link";

import { NextSeo } from "next-seo";

import styles from "../styles/Blog.module.scss";

import { getPostIds, getPostMetadata, PostData } from "@/utils/BlogPostData";

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
    <>
      <NextSeo
        title="Blog | ACM Cyber at UCLA"
        description="Some cool blog posts from ACM Cyber at UCLA!"
        openGraph={{
          images: [
            {
              url: "https://cyber.uclaacm.com/images/cyber-motif-applied.png",
              width: 990,
              height: 555,
              alt: "ACM Cyber logo",
            },
          ],
          site_name: "ACM Cyber at UCLA",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="page">
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
                <p>{post.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
