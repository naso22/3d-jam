/**
 * 投稿フィルタリングのカスタムフック
 */
import { useMemo } from "react";
import { BlogPost, BlogListProps } from "@/models/blog";
import { CategoryType } from "../types";

export const usePostFilter = (blogList: BlogListProps, selectedCategory: CategoryType) => {
  const filteredPosts = useMemo((): BlogPost[] => {
    console.log('usePostFilter - selectedCategory:', selectedCategory);
    console.log('usePostFilter - blogList.newBlog:', blogList.newBlog);
    console.log('usePostFilter - blogList.categoryBlog:', blogList.categoryBlog);
    
    if (selectedCategory === "new") {
      return blogList.newBlog;
    }
    
    const categoryPosts = blogList.categoryBlog?.filter(
      (blog) => {
        console.log('checking blog category:', blog.category[0]?.title, 'against:', selectedCategory);
        return blog.category[0]?.title === selectedCategory;
      }
    ) || [];
    
    console.log('usePostFilter - categoryPosts result:', categoryPosts);
    return categoryPosts;
  }, [blogList, selectedCategory]);

  const hasNoPosts = filteredPosts.length === 0;
  const isNewCategory = selectedCategory === "new";

  return {
    filteredPosts,
    hasNoPosts,
    isNewCategory,
  };
};
