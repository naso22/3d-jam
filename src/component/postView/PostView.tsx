"use client";
import { useState } from "react";
import BlogCard from "../card/BlogCard";
import styles from "./PostView.module.scss";

type BlogCategory = {
  title: string;
};

type BlogPost = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  category: BlogCategory[];
};

type PostViewProps = {
  blogList: BlogPost[];
};

export default function PostView({ blogList }: PostViewProps) {
  const [selectedTab, setSelectedTab] = useState("new");

  const renderPosts = (category: string, index: number) => {
    const filteredPosts =
      category === "new"
        ? blogList
        : blogList.filter((blog) => blog.category[0]?.title === category);

    return (
      <div
        key={index}
        className={`${styles.post} ${
          selectedTab === category ? styles.show : ""
        }`}
      >
        <div className={styles.post__inner}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))
          ) : (
            <p className={styles.noPostsMessage}>一致する投稿がありません。</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="content-inner">
      <div className={styles.postTab}>
        <div
          className={`${styles.tab1} ${
            selectedTab === "new" ? styles.selected : ""
          }`}
          onClick={() => setSelectedTab("new")}
        >
          最新記事
        </div>
        <div
          className={`${styles.tab2} ${
            selectedTab === "Three.js" ? styles.selected : ""
          }`}
          onClick={() => setSelectedTab("Three.js")}
        >
          Three.js
        </div>
        <div
          className={`${styles.tab3} ${
            selectedTab === "Jamstack" ? styles.selected : ""
          }`}
          onClick={() => setSelectedTab("Jamstack")}
        >
          Jamstack
        </div>
        <div
          className={`${styles.tab4} ${
            selectedTab === "UI/UX" ? styles.selected : ""
          }`}
          onClick={() => setSelectedTab("UI/UX")}
        >
          UI/UX
        </div>
      </div>
      {["new", "Three.js", "Jamstack", "UI/UX"].map((category, index) =>
        renderPosts(category, index)
      )}
    </main>
  );
}
