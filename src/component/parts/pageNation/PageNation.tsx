import Link from "next/link";
import styles from "./PageNation.module.scss";

type PageNationProps = {
  totalCount: number;
  currentPage: number;
};
export default function PageNation({
  totalCount,
  currentPage,
}: PageNationProps) {
  return (
    <>
      <div className={styles.pagination}>
        {1 < currentPage && (
          <>
            <Link
              className={`${styles.pageNumbers}`}
              href={`/page/${currentPage - 1}`}
            >
              &lt;
            </Link>
            <Link
              className={`${styles.pageNumbers}`}
              href={`/page/${currentPage - 1}`}
            >
              {currentPage - 1}
            </Link>
          </>
        )}
        <span className={`${styles.pageNumbers} ${styles.current}`}>
          {currentPage}
        </span>
        {totalCount - currentPage * 6 > 0 && (
          <>
            <Link
              className={`${styles.pageNumbers}`}
              href={`/page/${currentPage + 1}`}
            >
              {currentPage + 1}
            </Link>
            <Link
              className={`${styles.pageNumbers} ${styles.next}`}
              href={`/page/${currentPage + 1}`}
            >
              &gt;
            </Link>
          </>
        )}
      </div>
    </>
  );
}
