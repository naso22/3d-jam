"use client";
import { useState } from "react";
import BlogCard from "../card/BlogCard";
import MoreBtn from "../parts/moreBtn/MoreBtn";
import PageNation from "../parts/pageNation/PageNation";
import styles from "./PostView.module.scss";

type BlogCategory = {
  id:string
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
  totalCount: number;
  currentPage: number;
};

export default function PostView({
  blogList,
  totalCount,
  currentPage,
}: PostViewProps) {
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
        {filteredPosts.length !== 0 && category === "new" && (
          <PageNation totalCount={totalCount} currentPage={currentPage} />
        )}
        {filteredPosts.length !== 0 && category !== "new" && (
          <>
            <MoreBtn category={category} categoryId={filteredPosts[0].category[0].id}/>
          </>
        )}
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
