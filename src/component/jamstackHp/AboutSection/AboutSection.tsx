import ArrowIcon01 from "@/component/svgComponet/jamstackHP/about/ArrowIcon01";
import ArrowIcon02 from "@/component/svgComponet/jamstackHP/about/ArrowIcon02";
import ArrorwIcon03 from "@/component/svgComponet/jamstackHP/about/ArrowIcon03";
import CdnIcon from "@/component/svgComponet/jamstackHP/about/CdnIcon";
import DatabaseIcon from "@/component/svgComponet/jamstackHP/about/DatabaseIcon";
import PcIcon from "@/component/svgComponet/jamstackHP/about/PcIcon";
import RightIcon from "@/component/svgComponet/jamstackHP/about/RightIcon";
import ServerIcon from "@/component/svgComponet/jamstackHP/about/ServerIcon";
import styles from "./AboutSection.module.scss";
import ComparisonTable from "./ComparisonTable/ComparisonTable";
export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div>
        <h2>Jamstackとは？</h2>
        <p className={styles.aboutDescription}>
          Jamstackは、最新のWebサイトやアプリケーションの開発手法です。
          <br />
          事前にページを生成することで、サーバー処理のプロセスが最適化され、高速で安全、そしてスケーラブルなWebサイトを構築することができます。
        </p>
      </div>

      <div className={`${styles.cardContainer}`}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>従来のWEBサイト</div>
          <div className={styles.cardContent}>
            アクセスごとに、サーバーとデータベースのやりとり、ページの生成・配信といった処理が必須のため、
            表示速度、セキュリティリスクなどの課題があります。
          </div>
          <div className={`${styles.diagram}`}>
            <div className={styles.box}>
              <ServerIcon />
              <span>サーバー</span>
            </div>
            <div className={styles.arrow}>
              <ArrowIcon01 />
            </div>
            <div className={styles.box} style={{ paddingTop: "35px" }}>
              <DatabaseIcon />
              <span>データベース</span>
            </div>
            <div
              className={styles.arrow}
              style={{ gridColumn: "1 / span 2", marginLeft: "-40px" }}
            >
              <ArrowIcon02 />
            </div>
            <div className={styles.box} style={{ gridColumn: 1 }}>
              <PcIcon />
              <span>ユーザー</span>
            </div>
          </div>
        </div>

        {/* Icon */}
        <div className={styles.rightIcon}>
          <RightIcon />
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={`${styles.cardHeader} ${styles.mainColor}`}>
            Jamstackサイト
          </div>
          <div className={styles.cardContent}>
            CDNから事前に生成されたページを提供するため、ページの表示が非常に高速になります。<br />
            バックエンドのサーバーに依存しないため、攻撃対象が減り、より安全なシステム設計を実現しています。
          </div>
          <div
            className={`${styles.diagram} ${styles.jamstack}`}
            style={{ gridTemplateColumns: "1fr" }}
          >
            <div
              className={styles.box}
              style={{ width: "130px", margin: "0 auto" }}
            >
              <CdnIcon />
              <span style={{ display: "inline-block" }}>CDN</span>
            </div>

            <div
              className={styles.arrow}
              style={{ transform: "translateX(50px)" }}
            >
              <ArrorwIcon03 />
            </div>
            <div
              className={styles.box}
              style={{ width: "85px", margin: "0 auto" }}
            >
              <PcIcon />
              <span>ユーザー</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.overview}>
        <h3>技術構成</h3>
        <div className={styles.techBlock}>
          <div className={styles.techCard}>
            <div className={styles.techCardTitle}>CMS</div>
            <img className="fit-picture" src="/image6.png" />
            <img className="fit-picture" src="/logo-black.png" />
          </div>
          <div className={styles.techCard}>
            <div className={styles.techCardTitle}>フロントエンド</div>
            <img
              className="fit-picture"
              src="/nextjs.png"
              style={{ width: "40%" }}
            />
          </div>
          <div className={styles.techCard}>
            <div className={styles.techCardTitle}>ホスティング</div>
            <img
              className="fit-picture"
              style={{ width: "41%" }}
              src="/pngwing.png"
            />
            <img className="fit-picture" src="/image.png" />
          </div>
        </div>
        <h2>
          Jamstackと
          <br className={styles.breack} />
          従来サイトとの比較
        </h2>
        <ComparisonTable />
      </div>
    </section>
  );
}
