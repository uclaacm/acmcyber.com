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
        <div className="content">
          <h1>Blog</h1>
          <div className={styles.blogContainer}>
            {posts.map((post) => {
              return (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <div className={styles.blogPost}>
                    <span className={styles.category}>{post.category}</span>
                    <img
                      src={
                        post.image !== undefined
                          ? String(post.image)
                          : "/images/cyber-logo-light.png"
                      }
                      alt={post.title}
                      className={styles.image}
                    />
                    <div className={styles.blogBottom}>
                      <h3>{post.title}</h3>
                      <div className={styles.header}>
                        <span>by {post.authors.join(", ")}</span>
                        <span className={styles.date}>{post.date}</span>
                      </div>
                      <span className={styles.tags}>
                        Tags:{" "}
                        {post.tags.map((x, i) => (
                          <span className={styles.tag} key={i}>
                            {x}
                          </span>
                        ))}
                      </span>
                      <p className={styles.description}>{post.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
