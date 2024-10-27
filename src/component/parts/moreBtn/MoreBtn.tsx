import Link from "next/link";
import styles from'./MoreBtn.module.scss'

type MoreBtn = {
    category:string
    categoryId:string
}
export default function MoreBtn({category,categoryId}:MoreBtn) {
  return (
    <>
      <p className={styles.post__moreBtn}>
        < Link href={`/category/${categoryId}`}>
          {category} 記事をもっと見る
        </ Link>
      </p>
    </>
  );
}
