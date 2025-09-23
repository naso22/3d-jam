import Link from "next/link";
import styles from "./PageNation.module.scss";
type PageNationProps = {
  totalCount: number;
  limit: number;
  currentPage: {path:string,page:number};
};
export default function PageNation({
  totalCount,
  limit,
  currentPage,
}: PageNationProps) {
  // 現在のルートパスを取得
  return (
    <>
      <div className={styles.pagination}>
        {1 < currentPage.page && (
          <>
            <Link
              className={`${styles.pageNumbers}`}
              href={`${currentPage.path}/${currentPage.page - 1}`}
            >
              &lt;
            </Link>
            <Link
              className={`${styles.pageNumbers}`}
              href={`${currentPage.path}/${currentPage.page - 1}`}
            >
              {`${currentPage.page - 1}`}
            </Link>
          </>
        )}
        <span className={`${styles.pageNumbers} ${styles.current}`}>
          {currentPage.page}
        </span>
        {totalCount - currentPage.page * limit > 0 && (
          <>
            <Link
              className={`${styles.pageNumbers}`}
              href={`${currentPage.path}/${currentPage.page + 1}`}
            >
              {currentPage.page + 1}
            </Link>
            <Link
              className={`${styles.pageNumbers} ${styles.next}`}
              href={`${currentPage.path}/${currentPage.page + 1}`}
            >
              &gt;
            </Link>
          </>
        )}
      </div>
    </>
  );
}