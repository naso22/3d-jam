/**
 * PostView関連の定数
 */
import { CategoryConfig } from "./types";

export const CATEGORIES: CategoryConfig[] = [
  { id: "new", label: "最新記事", value: "new" },
  { id: "Jamstack", label: "Jamstack", value: "Jamstack" },
  { id: "UI/UX", label: "UI/UX", value: "UI/UX" },
  { id: "デザイン", label: "デザイン", value: "デザイン" },
];

export const DEFAULT_CATEGORY = "new";
