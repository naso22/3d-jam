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

async function getBlogList() {
  const res = await fetch("https://3d-jam.microcms.io/api/v1/blog?limit=3", {
    headers: {
      "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function BlogSection() {
  const blogList: BlogPost = await getBlogList();
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
