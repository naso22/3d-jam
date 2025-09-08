import Link from "next/link";
import styles from "./ContactSection.module.scss"
export default function ContactSection() {
  return (
    <>
      <div className={styles.about}>
        <div className="service_inner">
          <div className={styles.about_content}>
            <div>
              <div className={styles.about_title}>
                <div className={styles.title_eng}>Contact</div>
                <p className={styles.title}>お問い合わせ</p>
              </div>
              <p>
               フロントエンドエンジニアをしています。
                <br />
                Next.js,React,TypeScriptを使った、サイト制作/アプリ開発を得意としています。
              </p>
            </div>
            <Link href={"/contact"} className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                className={styles.arrow_icon}
              >
                <path
                  d="M16.175 9H0.5V7H16.175L10.575 1.4L12 0L20 8L12 16L10.575 14.6L16.175 9Z"
                  fill="#E8EAED"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
