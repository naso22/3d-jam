import Link from "next/link";
import HambergarMenu from "./HambergarMenu";
import styles from "./Header.module.scss"; // CSSモジュールのインポート

type HeaderProps = {
  navItems: { name: string; href: string }[];
};

export default async function Header({ navItems }:HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__inner}>
            <h1 className={styles.headerLogo}>
              <Link href="/">Jam Man</Link>
            </h1>

            <div className={styles.drawer_bg}></div>
            <nav className={styles.headerNav}>
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
            <HambergarMenu navItems={navItems} />
          </div>
        </div>
      </header>
    </>
  );
}
