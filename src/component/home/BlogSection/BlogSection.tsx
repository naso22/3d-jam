import BlogCard from "@/component/card/BlogCard";
import Link from "next/link";
import styles from "./BlogSection.module.scss";
type BlogCategory = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  category: BlogCategory[];
};

type BlogPost = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  contents: BlogCategory[];
};

type BlogSectionProps = {
  blogList: BlogPost;
};

export default function BlogSection({ blogList }: BlogSectionProps) {
  return (
    <>
      <div className="service_inner">
        <div className={styles.blog_inner}>
          <h2 className={styles.title_eng}>Blog</h2>
          <p className={styles.title}>ブログ</p>
          <div className={styles.blog_content}>
            {blogList.contents.map((blog, index) => {
              return <BlogCard key={index} blog={blog} />;
            })}
          </div>
          <div className={styles.blogMoreContent}>
            <Link href={`/blog`}>
              <p className={styles.blog_btn}>ブログ一覧へ</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
