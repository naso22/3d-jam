import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.scss";

type BlogCategory = {
  title: string;
};

type BlogPost = {
  blog: {
    id: string;
    title: string;
    mainVisual: {
      url: string;
    };
    category: BlogCategory[];
  };
};
export default function BlogCard({ blog }: BlogPost) {
  return (
    <>
      <div className={styles.cardRadius02} key={blog.id}>
        <Link href={`/blog/${blog.id}`}>
          <article className={styles.card02}>
            <div className={styles.cardHeader02}>
              <figure className={styles.card__thumbnail02}>
                <Image
                  src={blog.mainVisual?.url}
                  className={styles.card__image02}
                  alt={blog.title}
                  layout="responsive" // これでレスポンシブに設定
                  width={100} // 比率を保ちながら、親要素に合わせて調整されます
                  height={100} // 上記のwidthに対する高さの比率が維持されます
                />
              </figure>
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
      </div>
    </>
  );
}
