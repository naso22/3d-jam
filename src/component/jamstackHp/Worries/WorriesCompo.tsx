import BackgroundShape from "@/component/svgComponet/jamstackHP/Worreis/BackgroundShape";
import ErrorIcon from "@/component/svgComponet/jamstackHP/Worreis/ErrorIcon";
import IsomeSupport from "@/component/svgComponet/jamstackHP/Worreis/IsomeSupport";
import styles from "./Worres.module.scss";
export default function WorriesCompo() {
  const worriesList = [
    "Webサイトの表示速度がいのでもっと早くしたい",
    "現在のWebサイトではセキュリティーが不安",
    "Webサイトの運用コストを削減したい",
    "Webサイトを使って集客をしたいが何をしたら良いのか分からない",
  ];
  return (
    <>
      <section className={styles.worries}>
        <div>
          <h2>こんなお悩みありませんか？</h2>
          <div className={styles.worries_inner}>
            <div  className={styles.worries_img}>
              <div style={{ width: "100%" }}>
                <BackgroundShape />
              </div>
              <div
                style={{
                  top: "20px",
                  left: "60px",
                  position: "absolute",
                  width: "80%",
                }}
              >
                <IsomeSupport />
              </div>
            </div>
            <div className={styles.worriesList}>
              {worriesList.map((value) => {
                return (
                  <>
                    <div className={styles.worriesItem}>
                      <ErrorIcon />

                      <p className={styles.worriesDescription}>{value}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
