// components/PriceSection.jsx
import Link from "next/link";
import styles from "./PriceSection.module.scss";

export default function PriceSection() {
  return (
    <section className={styles.priceSection}>
      <h2 className={styles.priceTitle}>Price</h2>
      <div style={{maxWidth:'1200px',margin:'0 auto'}}>
        {/* LPプラン */}
        <div className={styles.priceContainer}>
          <div className={styles.priceCard}>
            <h3 className={`${styles.planTitle} ${styles.lp}`}>LPプラン</h3>
            <p className={styles.price}>70,000円〜</p>
            <p className={styles.description}>
              商品の紹介、サービスの紹介用のランディングページ制作向けプラン。
            </p>
            <Link href={"/contact"}>
              <p className={styles.contactButton}>お問い合わせ</p>
            </Link>
            <ul className={styles.features}>
              <li>サイトボリューム: 1ページ</li>
              <li>オリジナルデザイン</li>
              <li>スマホ対応</li>
              <li>お問い合わせ機能</li>
              <li>SEO対策</li>
              <li>ブログ対応: なし</li>
            </ul>
          </div>
          {/* スタンダードプラン */}
          <div className={styles.priceCard}>
            <h3 className={`${styles.planTitle} ${styles.hp}`}>LPプラン</h3>
            <p className={styles.price}>70,000円〜</p>
            <p className={styles.description}>
              商品の紹介、サービスの紹介用のランディングページ制作向けプラン。
            </p>
            <Link href={"/contact"}>
              <p className={styles.contactButton}>お問い合わせ</p>
            </Link>
            <ul className={styles.features}>
              <li>サイトボリューム: 1ページ</li>
              <li>オリジナルデザイン</li>
              <li>スマホ対応</li>
              <li>お問い合わせ機能</li>
              <li>SEO対策</li>
              <li>ブログ対応: なし</li>
            </ul>
          </div>

          {/* フルオーダーメイド */}
          <div className={styles.priceCard}>
            <h3 className={`${styles.planTitle} ${styles.odermade}`}>LPプラン</h3>
            <p className={styles.price}>70,000円〜</p>
            <p className={styles.description}>
              商品の紹介、サービスの紹介用のランディングページ制作向けプラン。
            </p>
            <Link href={"/contact"}>
              <p className={styles.contactButton}>お問い合わせ</p>
            </Link>
            <ul className={styles.features}>
              <li>サイトボリューム: 1ページ</li>
              <li>オリジナルデザイン</li>
              <li>スマホ対応</li>
              <li>お問い合わせ機能</li>
              <li>SEO対策</li>
              <li>ブログ対応: なし</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
