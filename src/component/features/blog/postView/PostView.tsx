"use client";
import { useState } from "react";
import PostTab from "./components/PostTab";
import PostList from "./components/PostList";
import { PostViewProps, CategoryType } from "./types";
import { CATEGORIES, DEFAULT_CATEGORY } from "./constants";
import styles from "./PostView.module.scss";

export default function PostView({
  blogList,
  totalCount,
  limit,
  currentPage,
  showTab,
}: PostViewProps) {
  const [selectedTab, setSelectedTab] = useState<CategoryType>(DEFAULT_CATEGORY);

  const handleTabChange = (category: CategoryType) => {
    setSelectedTab(category);
  };

  return (
    <div className="content-inner">
      {showTab && (
        <PostTab
          categories={CATEGORIES}
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />
      )}
      
      {CATEGORIES.map((category) => (
        <div
          key={category.id}
          className={`${styles.post} ${
            selectedTab === category.id ? styles.show : ""
          }`}
        >
          <PostList
            blogList={blogList}
            selectedCategory={category.id}
            totalCount={totalCount}
            limit={limit}
            currentPage={currentPage}
          />
        </div>
      ))}
    </div>
  );
}
