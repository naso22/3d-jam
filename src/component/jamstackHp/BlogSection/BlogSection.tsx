import BlogCard from "@/component/card/BlogCard";
import styles from "./BlogSection.module.scss";
type BlogCategory = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  category: BlogCategory[];
};

type BlogSectionProps ={
  blogList:{
    id: string;
    title: string;
    mainVisual: {
      url: string;
    };
    contents: BlogCategory[];
  }
}


export default function BlogSection({ blogList }: BlogSectionProps) {
  return (
    <div className={styles.blog}>
      <div className="service_inner">
        <div className={styles.blog_inner}>
          <h2 className={styles.title_eng}>Blog</h2>
          <p className={styles.title}>ブログ</p>
          <div className={styles.blog_content}>
            {blogList.contents.map((blog, index) => {
              return <BlogCard key={index} blog={blog} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
