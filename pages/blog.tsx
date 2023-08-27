import { useState } from "react";

import styles from "../styles/Blog.module.scss";

import CyberSeo from "@/components/CyberSeo";
import { getPostIds, getPostMetadata, PostData } from "@/utils/BlogPostData";

const categories = ["All", "News", "Events", "Projects"];

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
  const [filterCategory, setFilterCategory] = useState("All");

  function getPosts() {
    let res = posts.filter((post) => {
      if (filterCategory === "All") {
        return true;
      }
      return post.category === filterCategory;
    });

    if (res.length === 0) {
      return <p>No posts found.</p>;
    }

    res.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return res.map((post) => {
      return (
        <a href={`/blog/${post.id}`} key={post.id}>
          <div className={styles.blogPost}>
            <span className={styles.category}>{post.category}</span>
            <img
              src={
                post.image !== undefined
                  ? String(post.image)
                  : "/images/cyber-motif-applied.png"
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
        </a>
      );
    });
  }

  return (
    <>
      <CyberSeo
        title="Blog"
        description="Some cool blog posts from ACM Cyber at UCLA!"
      />
      <div className="page">
        <div className="content">
          <h1>Blog</h1>
          <span className={styles.categorySelectHeading}>Categories:</span>
          <ul className={styles.categorySelect}>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setFilterCategory(category)}
                className={
                  filterCategory === category ? styles.selected : undefined
                }
              >
                {category}
              </li>
            ))}
          </ul>

          <div className={styles.blogContainer}>{getPosts()}</div>
        </div>
      </div>
    </>
  );
}
