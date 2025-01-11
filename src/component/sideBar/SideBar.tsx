import styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <aside className={styles.insidesp}>
      <div className={styles.widget}>
        <h4 className={`${styles.widget__title} ${styles.profiel}`}>
          プロフィール
        </h4>
        <div className={styles.widget__inner}>
          {/* <div className={styles.profiel__img}>
            <img
              src="https://kyomoneyblog.com/wp-content/uploads/7051304f37a3653aa23d9cdad05e7688-96x96.png"
              alt=""
            />
          </div> */}
          <p className={styles.widget__name}>長野 冷</p>
          <div className={styles.widget__text}>
            東京都江戸川区を拠点にフロントエンドエンジニアをしています。<br />
            UI・UXに優れたWEBサイト制作を得意としています。
          </div>
        </div>
      </div>

      {/* <div className={`${styles.widget} ${styles.newPost}`}>
                <h4 className={styles.widget__title}>最新記事</h4>
                <ul className={styles.show_num}>
                    {Array(5).fill('').map((_, index) => (
                        <li key={index}>
                            <a href="">
                                <figure className={styles.newPost__img}>
                                    <img 
                                        src="https://kyomoneyblog.com/wp-content/uploads/%E6%AD%A3%E7%A4%BE%E5%93%A1%E7%99%BB%E7%94%A8%E8%90%BD%E3%81%A1%E3%82%8B%E4%BA%BA%E3%81%AE%E7%89%B9%E5%BE%B4-1-160x160.jpg"
                                        alt=""
                                    />
                                </figure>
                                <div className={styles.widget__text}>
                                    【経験者目線】正社員登用制度に落ちる人、受かる人の特徴は？
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div> */}
    </aside>
  );
}
