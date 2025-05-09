import AnaliuticsIcon from "@/component/icon/Analiytics";
import Develop from "@/component/icon/Develop";
import DocumentIcon from "@/component/icon/Document";
import PcIcon from "@/component/icon/Pc";
import Link from "next/link";
import styles from "./ServiceSection.module.scss";
export default function ServiceSection() {
  return (
    <>
      <div className={styles.service}>
        <div className="service_inner">
          <h2 className={styles.title_eng}>Service</h2>
          <p className={styles.title}>サービス内容</p>
          <div className={styles.service_content}>
            <div className={`${styles.box} ${styles.box1}`}>
              <Link href={"/jamstackHp"}>
                <div className={styles.service_title}>
                  <span className={styles.icon}>
                    <PcIcon />
                  </span>
                  Jamstack サイト制作
                </div>
                <p className={`${styles.discription}`}>
                  Jamstack技術を駆使した高速で安全なWebサイトを構築いたします。
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#818181"
                    className={styles.more_icon}
                  >
                    <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                  </svg>
                </div>
              </Link>
            </div>

            <div className={`${styles.box} ${styles.box2}`}>
              <Link href={""}>
                <div className={styles.service_title}>
                  <span className={styles.icon}>
                    <DocumentIcon />
                  </span>
                  ホームページ制作
                </div>
                <p className={`${styles.discription}`}>
                  ニーズや目的に沿ったホームページを構築いたします。
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#818181"
                  className={styles.more_icon}
                >
                  <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                </svg>
              </Link>
            </div>
            <div className={`${styles.box} ${styles.box3}`}>
              <Link href={""}>
                <div className={styles.service_title}>
                  <span className={styles.icon}>
                    <Develop />
                  </span>
                  マーケティング支援
                </div>
                <p className={`${styles.discription}`}>
                  SNS運用やLINE構築などを駆使してWebマーケティングを支援いたします
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#818181"
                  className={styles.more_icon}
                >
                  <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                </svg>
              </Link>
            </div>
            <div className={`${styles.box} ${styles.box3}`}>
              <Link href={""}>
                <div className={styles.service_title}>
                  <span className={styles.icon}>
                    <AnaliuticsIcon />
                  </span>
                  システム開発
                </div>
                <p className={`${styles.discription}`}>
                  抱えている悩みを解決できるシステムを構築いたします
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#818181"
                  className={styles.more_icon}
                >
                  <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
