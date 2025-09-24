/**
 * 投稿タブコンポーネント
 */
import { PostTabProps, CategoryType } from "../types";
import styles from "../PostView.module.scss";

export default function PostTab({ categories, selectedTab, onTabChange }: PostTabProps) {
  const getTabStyle = (categoryId: CategoryType, index: number) => {
    const baseClass = `${styles[`tab${index + 1}`]}`;
    const selectedClass = selectedTab === categoryId ? styles.selected : "";
    return `${baseClass} ${selectedClass}`;
  };

  return (
    <div className={styles.postTab}>
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={getTabStyle(category.id, index)}
          onClick={() => onTabChange(category.id)}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
}
