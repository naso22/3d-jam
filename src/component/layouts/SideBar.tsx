import styles from "./SideBar.module.scss";
export default function SideBar() {
  return (
    <aside className={styles.insidesp}>
      <div className={styles.widget}>
        <h4 className={`${styles.widget__title} ${styles.profiel}`}>
          プロフィール
        </h4>
        <div className={styles.widget__inner}>
          <p className={styles.widget__name}>長野 冷</p>
          <div className={styles.widget__text}>
            フロントエンドエンジニアをしています。
            <br />
            UI・UXに優れたWEBサイト制作を得意としています。
          </div>
        </div>
      </div>
    </aside>
  );
}
