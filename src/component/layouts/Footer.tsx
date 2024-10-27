import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.mdFlex} ${styles.mdJustifyBetween}`}>
        <h1 className={styles.footerLogo}>
          <a href="/">3D-Jam</a>
        </h1>
        <div className={styles.grid}>
          <div className={styles.footerContent}>
            <p className={styles.footer__naviHeading}>FOLLOW US</p>
            <ul className={styles.footer__navi}>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerContent}>
            <p className={styles.footer__naviHeading}>ABOUT</p>
            <ul className={styles.footer__navi}>
              <li>
                <a href="#">会社概要</a>
              </li>
              <li>
                <a href="#">お問い合わせ</a>
              </li>
              <li>
                <a href="#">サイトマップ</a>
              </li>
              <li>
                <a href="#">プライバシーポリシー</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.copyright}>
        © 2023 <a href="https://jajaaan.co.jp/">JAJAAAN Inc.</a> All Rights Reserved.
      </p>
    </footer>
  );
}
