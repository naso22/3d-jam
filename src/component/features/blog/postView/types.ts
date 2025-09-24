/**
 * PostView関連の型定義
 */
import { BlogListProps } from "@/models/blog";

export type CategoryType = "new" | "Jamstack" | "UI/UX" | "デザイン";

export interface CategoryConfig {
  id: CategoryType;
  label: string;
  value: string;
}

export interface PostViewProps {
  blogList: BlogListProps;
  totalCount: number;
  limit: number;
  currentPage: { path: string; page: number };
  showTab: boolean;
}

export interface PostTabProps {
  categories: CategoryConfig[];
  selectedTab: CategoryType;
  onTabChange: (category: CategoryType) => void;
}

export interface PostListProps {
  blogList: BlogListProps;
  selectedCategory: CategoryType;
  totalCount: number;
  limit: number;
  currentPage: { path: string; page: number };
}
