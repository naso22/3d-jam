import BlogCard from "@/component/common/card/BlogCard";
import Link from "next/link";
import styles from "./BlogSection.module.scss";
import { client } from "@/libs/client";
type BlogCategory = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  category: BlogCategory[];
  updatedAt: string;
};

type BlogPost = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  contents: BlogCategory[];
};

async function getBlogList() {
  try {
    const data = await client.get({
      endpoint: "blog",
      queries: {
        limit: 3,
      },
    });
    return data;
  } catch {
    throw new Error("Failed to fetch blog data");
  }
}

export default async function BlogSection() {
  const blogList: BlogPost = await getBlogList();
  return (
    <>
    <div className={styles.blog} id="blog">
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
    </div>
    </>
  );
}
