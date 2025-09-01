import styles from "./ProcessSection.module.scss";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <>
      <section className={styles.process}>
        <h2 className={styles.ProcessTitle_eng}>Work Flow</h2>
        <p className={styles.ProcessTitle}>制作フロー</p>
        <div>
          最初のヒアリングから納品まで、定期的なミーティングや進捗報告を通じて、プロジェクトの進行状況を共有。<br />
          お客様のご意見やフィードバックを素早く反映し、常に最適な結果を目指します。
        </div>
        <div className={styles.processInner}>
          <div className={`${styles.arrow} ${styles.item1}`}>
            <div>
              <Image src="/Process/hiarling.png" alt="打ち合わせ・ヒアリング" width={300} height={300} />
              <div className={styles.processNode}>打ち合わせ・ヒアリング</div>
            </div>
          </div>
          <svg
            className={`${styles.item2}`}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
          <div className={`${styles.arrow} ${styles.item3}`}>
            <div>
              <Image src="/Process/design.png" alt="仕様検討・要件定義" width={300} height={300} />
              <div className={styles.processNode}>仕様検討・要件定義</div>
            </div>
          </div>
          <svg
            className={`${styles.arrowUnder} ${styles.item4}`}
            // style={{ gridColumn: "2 / span 4" }}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>

          <div className={`${styles.arrow} ${styles.item5}`}>
            <div>
              <Image src="/Process/create-web.png" alt="デザイン・使用検討" width={300} height={300} />
              <div className={styles.processNode}>デザイン・使用検討</div>
            </div>
          </div>
          <svg
            className={`${styles.item6} ${styles.arrowLeft}`}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>

          <div className={`${styles.arrow} ${styles.item7}`}>
            <div>
              <Image src="/Process/siteTest.png" alt="保守・運用" width={300} height={300} />
              <div className={styles.processNode}>保守・運用</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
