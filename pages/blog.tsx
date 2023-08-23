import Link from "next/link";

import styles from "../styles/Blog.module.scss";

import CyberSeo from "@/components/CyberSeo";
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
      <CyberSeo
        title="Blog"
        description="Some cool blog posts from ACM Cyber at UCLA!"
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
                  {post.tags.map((x, i) => (
                    <span className={styles.tag} key={i}>
                      {x}
                    </span>
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
