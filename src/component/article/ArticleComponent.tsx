import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import styles from "./ArticleComponent.module.scss";
type ArticleComponentProps = {
  title: string;
  mainVisual:string;
  articleContent: string;
};

export default function ArticleComponent({
  title,
  mainVisual,
  articleContent,
}: ArticleComponentProps) {
  return (
    <>
      <main className={styles.postMain}>
        <BreadcrumbComponent />
        <section>
          <article className={`${styles.articleWrapper} article`}>
            <div className={styles.articleHead}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <img src={mainVisual} alt="" />
              <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: articleContent }} />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
