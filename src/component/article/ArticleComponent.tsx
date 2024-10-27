import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import styles from "./ArticleComponent.module.scss";
type ArticleComponentProps = {
  blogUrl:string;
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
    { name: "ホーム", href: "/" },
    { name: title, href: `/blog/${blogUrl}` },
  ];
  return (
    <>
      <main className={styles.postMain}>
        <BreadcrumbComponent breadcrumbData={breadcrumbData} />
        <section>
          <article className={`${styles.articleWrapper} article`}>
            <div className={styles.articleHead}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <img src={mainVisual} alt="" />
              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
