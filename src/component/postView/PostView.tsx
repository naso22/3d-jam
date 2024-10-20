import styles from './PostView.module.scss';

export default function PostView() {
    return (
        <main className="content-inner">
            <div className={styles.postTab}>
                <div className={styles.tab1}>人気記事</div>
                <div className={styles.tab2}>プログラミング</div>
                <div className={styles.tab3}>デザイン</div>
                <div className={styles.tab4}>WordPress</div>
            </div>

            <div className={styles.post__inner}>
                {/* カードの構造をここに追加 */}
                
                    <article className={styles.cardRadius02}>
                        <div className={styles.card02}>
                            <div className={styles.card__thumbnail02}>
                                <img
                                    src="https://dubdesign.net/wp-content/uploads/2020/05/0514_inhouse_designereyecatch.jpg"
                                    alt="サムネイル"
                                    className={styles.card__image02}
                                />
                            </div>
                            <time className={styles.card__day}>2024.01.16</time>
                            <p className={styles.card__title02}>サムネイルのタイトル</p>
                            <ul>
                                <li className={styles.postTag}>
                                    <span>#HTML/CSS</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className={styles.cardRadius02}>
                        <div className={styles.card02}>
                            <div className={styles.card__thumbnail02}>
                                <img
                                    src="https://dubdesign.net/wp-content/uploads/2020/05/0514_inhouse_designereyecatch.jpg"
                                    alt="サムネイル"
                                    className={styles.card__image02}
                                />
                            </div>
                            <time className={styles.card__day}>2024.01.16</time>
                            <p className={styles.card__title02}>サムネイルのタイトル</p>
                            <ul>
                                <li className={styles.postTag}>
                                    <span>#HTML/CSS</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className={styles.cardRadius02}>
                        <div className={styles.card02}>
                            <div className={styles.card__thumbnail02}>
                                <img
                                    src="https://dubdesign.net/wp-content/uploads/2020/05/0514_inhouse_designereyecatch.jpg"
                                    alt="サムネイル"
                                    className={styles.card__image02}
                                />
                            </div>
                            <time className={styles.card__day}>2024.01.16</time>
                            <p className={styles.card__title02}>サムネイルのタイトル</p>
                            <ul>
                                <li className={styles.postTag}>
                                    <span>#HTML/CSS</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                
                {/* 他のカードも同様に追加 */}
            </div>
        </main>
    );
}
