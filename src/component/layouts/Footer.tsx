import styles from "./Footer.module.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.mdFlex} ${styles.mdJustifyBetween}`}>
        <h1 className={styles.footerLogo}>
          <a href="/">Jam Man</a>
        </h1>
        <div className={styles.grid}>
          <div className={styles.footerContent}>
            <p className={styles.footer__naviHeading}>FOLLOW US</p>
            <ul className={styles.footer__navi}>
              <li>
                <a href="https://x.com/wGOGNc30tFGCCiA">Twitter</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerContent}>
            <ul className={styles.footer__navi}>
              <li>
                <Link href={"/"}>ホー</Link>
              </li>
              <li>
                <Link  href={"/#service"}>サービス</Link>
              </li>
              <li>
                <Link href={"/blog"}>ブログ</Link>
              </li>
              <li>
                <Link href={"/#about"}>私について</Link>
              </li>
              <li>
                <Link href={"/contact"}>お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.copyright}>
        © 2023 <a href="https://jajaaan.co.jp/">JAJAAAN Inc.</a> All Rights
        Reserved.
      </p>
    </footer>
  );
}
