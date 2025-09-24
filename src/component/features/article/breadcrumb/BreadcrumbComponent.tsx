import Link from "next/link";
import styles from "./BreadcrumbComponent.module.scss";

type BreadcrumbProps = {
  breadcrumbData: { name: string; href: string }[];
};

export default function BreadcrumbComponent({
  breadcrumbData,
}: BreadcrumbProps) {
  return (
    <>
      <ol
        className={styles.breadcrumb}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbData.map((crumb, index) => {
          return (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className={styles.breadcrumbItem}
            >
              <Link
                itemProp="item"
                href={crumb.href}
                className={styles.breadcrumbLink}
              >
                <span itemProp="name">{crumb.name}</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
          );
        })}
      </ol>
    </>
  );
}
