import Link from "next/link";
import styles from "./PostView.module.scss";

type BlogCategory = {
  title: string;
};

type BlogPost = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  category: BlogCategory[];
};

type PostViewProps = {
  blogList: BlogPost[];
};

export default function PostView({ blogList }: PostViewProps) {
  return (
    <main className="content-inner">
      <div className={styles.postTab}>
        <div className={styles.tab1}>人気記事</div>
        <div className={styles.tab2}>プログラミング</div>
        <div className={styles.tab3}>デザイン</div>
        <div className={styles.tab4}>WordPress</div>
      </div>

      <div className={styles.post__inner}>
        {blogList.map((blog) => (
          <Link key={blog.id} href={`blog/${blog.id}`}>
            <article className={styles.cardRadius02}>
              <div className={styles.card02}>
                <div className={styles.card__thumbnail02}>
                  <img
                    src={blog.mainVisual?.url}
                    className={styles.card__image02}
                    alt={blog.title}
                  />
                </div>
                <time className={styles.card__day}>2024.01.16</time>
                <p className={styles.card__title02}>{blog.title}</p>
                <ul>
                  <li className={styles.postTag}>
                    <span>{blog.category[0]?.title}</span>
                  </li>
                </ul>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
