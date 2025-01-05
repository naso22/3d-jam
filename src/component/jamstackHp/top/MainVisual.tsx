import BackgroundShape from "@/component/svgComponet/jamstackHP/BackgroundShape";
import BarGraph from "@/component/svgComponet/jamstackHP/BarGraph";
import MainVisualSvg from "@/component/svgComponet/jamstackHP/MainVisual";
import Link from "next/link";
import styles from "./MainVisual.module.scss";
export default function MainVisual() {
  return (
    <>
      <div className={styles.fv_inner}>
        <div
        className={styles.fv_container}
          style={{
            display: "flex",
            height: "100%",
            margin: "0 auto",
            maxWidth: "1200px",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div className={styles.back_fluid}>
            <BackgroundShape />
          </div>
          <div className={styles.main}>
            <div className={styles.main_inner}>
              <h1 className={styles.main_title}>Jamstackサイト制作</h1>
              <p className={styles.sub_title}>
                最新技術で集客と売上に加速を
                <br />
              </p>
            </div>
            <Link href={`/contact`}>
              <p className={styles.contact_btn}>お問い合わせ</p>
            </Link>
          </div>

          <div className={styles.mainVisual}>
            <MainVisualSvg />
          </div>

          <div className={styles.back_bargraph}>
            <div className={styles.bar}>
              <BarGraph width={140} fill={"#11319A"} />
            </div>
            <div className={styles.bar}>
              <BarGraph width={100} fill={"#3078C8"} />
            </div>
            <div className={styles.bar}>
              <BarGraph width={58} fill={"#11319A"} />
            </div>
            <div className={styles.bar_bottom}>
              <BarGraph width={69} fill={"#3078C8"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
