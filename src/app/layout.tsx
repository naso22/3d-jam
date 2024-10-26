import Header from "@/component/layouts/Header";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.scss";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

async function getNavItems() {
  // SSGのためのデータ取得
  return [
    { name: "ホーム", href: "/" },
    { name: "サイト概要", href: "/about" },
    { name: "お問い合わせ", href: "/contact" },
  ];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getNavItems();
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
