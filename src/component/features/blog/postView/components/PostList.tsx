/**
 * 投稿リストコンポーネント
 */
import BlogCard from "@/component/common/card/BlogCard";
import MoreBtn from "@/component/common/button/MoreBtn";
import PageNation from "@/component/features/blog/pageNation/PageNation";
import { PostListProps } from "../types";
import { usePostFilter } from "../hooks/usePostFilter";
import styles from "../PostView.module.scss";

export default function PostList({
  blogList,
  selectedCategory,
  totalCount,
  limit,
  currentPage,
}: PostListProps) {
  console.log('PostList - blogList:', blogList);
  console.log('PostList - selectedCategory:', selectedCategory);
  
  const { filteredPosts, hasNoPosts, isNewCategory } = usePostFilter(
    blogList,
    selectedCategory
  );
  
  console.log('PostList - filteredPosts:', filteredPosts);
  console.log('PostList - hasNoPosts:', hasNoPosts);

  if (hasNoPosts) {
    return (
      <p className={styles.noPostsMessage}>一致する投稿がありません。</p>
    );
  }

  return (
    <>
      <div className={styles.post__inner}>
        {filteredPosts.map((blog, index) => (
          <BlogCard key={blog.id || index} blog={blog} />
        ))}
      </div>

      {isNewCategory ? (
        <PageNation
          totalCount={totalCount}
          limit={limit}
          currentPage={currentPage}
        />
      ) : (
        <div className={styles.more_btn_inner}>
          <MoreBtn
            category={selectedCategory}
            categoryId={filteredPosts[0]?.category[0]?.id}
          />
        </div>
      )}
    </>
  );
}
