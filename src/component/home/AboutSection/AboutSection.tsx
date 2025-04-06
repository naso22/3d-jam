import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <>
      <div className={styles.aboutMe_wrapper}>
        <div>
          <Image
            src="/shikrokuma.jpg"
            className={styles.aboutIcon}
            alt="icon"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className={styles.textWrapper}>
        <p>長野　冷</p>
        <p>
          東京都江戸川区を拠点にフロントエンドエンジニアをしています。
          <br />
          モダンな技術を駆使してUI・UXに優れたホームページ制作を得意としています。
          <br />
        </p>
        <p>
          Next.js / React / Vue.js TypeScript / Vercel / ampyfly / vercel /
          Figuma
        </p>
        <p className={styles.sns}>
          <a href="https://x.com/wGOGNc30tFGCCiA">X</a>
        </p>
        <Link href={`/contact`}>
          <p className={styles.contact_btn}>お問い合わせ</p>
        </Link>
      </div>
    </>
  );
}
