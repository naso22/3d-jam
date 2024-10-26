import styles from "./BreadcrumbComponent.module.scss";

export default function BreadcrumbComponent() {
  return (
    <>
      <ol
        className={styles.breadcrumb}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className={styles.breadcrumbItem}
        >
          <a itemProp="item" href="ホームのURL" className={styles.breadcrumbLink}>
            <span itemProp="name">ホーム</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>

        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className={styles.breadcrumbItem}
        >
          <a itemProp="item" href="ホームのURL" className={styles.breadcrumbLink}>
            <span itemProp="name">ホーム</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
      </ol>
    </>
  );
}
