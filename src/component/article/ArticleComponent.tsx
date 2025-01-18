import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import Link from "next/link";
import styles from "./ArticleComponent.module.scss";
import Image from "next/image";
type ArticleComponentProps = {
  blogUrl: string;
  title: string;
  mainVisual: string;
  articleContent: string;
};

export default function ArticleComponent({
  blogUrl,
  title,
  mainVisual,
  articleContent,
}: ArticleComponentProps) {
  const breadcrumbData = [
    { name: "ホーム", href: "/blog" },
    { name: "ブログ", href: `/blog` },
    { name: title, href: `/blog/${blogUrl}` },
  ];
  return (
    <>
      <main className={`${styles.postMain} main_content`}>
        <BreadcrumbComponent breadcrumbData={breadcrumbData} />
        <section>
          <article className={`${styles.articleWrapper} article`}>
            <div className={styles.articleHead}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <Image
                src={mainVisual} // 画像のパスを指定
                className={styles.aboutIcon}
                alt="aiconイメージ"
                layout="responsive"
                width={100} // 画像の幅を指定
                height={100} // 画像の高さを指定
              />
              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
              <div>
                <h2>Webのことならお任せください</h2>
                <p>
                  <Link href="/#about">私について　</Link>
                  <Link href="/contact">お問い合わせ　</Link>
                  <a href="https://x.com/wGOGNc30tFGCCiA">　X</a>
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
