"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.scss"; // CSSモジュールのインポート

type HeaderProps = {
  navItems: { name: string; href: string }[];
};

export default function Header({ navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`${styles.drawerBg} ${isMenuOpen ? styles.addBg : ""}`}
      ></div>

      <nav
        className={`${styles.hambergerMenu} ${styles.headerNav} ${
          isMenuOpen ? styles.headerNavOpen : ""
        }`}
      >
        <ul className={styles.headerNavList}>
          {navItems.map((item, index) => {
            return (
              <li key={index} className={styles.headerNavListItem}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={`${styles.headerToggle} ${
          isMenuOpen ? styles.headerToggleActive : ""
        }`}
        onClick={handleOpenMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
