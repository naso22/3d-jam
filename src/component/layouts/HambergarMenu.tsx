"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.scss"; // CSSモジュールのインポート

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`${styles.drawerBg} ${isMenuOpen ? styles.addBg : ""}`}></div>
      
      <nav className={`${styles.hambergerMenu} ${styles.headerNav} ${isMenuOpen ? styles.headerNavOpen : ""}`}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>
            <Link href="https://www.front-blog.com">ホーム</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href="https://www.front-blog.com/about">サイト概要</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href="https://www.front-blog.com/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>

      <div className={`${styles.headerToggle} ${isMenuOpen ? styles.headerToggleActive : ""}`} onClick={handleOpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
