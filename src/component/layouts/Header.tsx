import Link from 'next/link';
import styles from './Header.module.scss'; // CSSモジュールのインポート
import SlideShow from '../slideShow/SlideShow';
export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__content}>
                    <div className={styles.header__inner}>
                        <h1 className={styles.headerLogo}>
                            <Link href="https://www.front-blog.com">
                                Front Blog
                            </Link>
                        </h1>

                        <div className={styles.drawer_bg}></div>
                        <nav className={styles.headerNav}>
                            <ul className={styles.headerNavList}>
                                <li className={styles.headerNavListItem}>
                                    <Link href="https://www.front-blog.com">
                                        ホーム
                                    </Link>
                                </li>
                                <li className={styles.headerNavListItem}>
                                    <Link href="https://www.front-blog.com/about">
                                        サイト概要
                                    </Link>
                                </li>
                                <li className={styles.headerNavListItem}>
                                    <Link href="https://www.front-blog.com/contact">
                                        お問い合わせ
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={styles.headerToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={styles.FirstView}>
                    <SlideShow />
                    {/* Swiperの部分はクライアントサイドでレンダリングされるべき */}
                </div>
            </header>
        </>
    );
}
