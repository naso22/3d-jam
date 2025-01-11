import Header from "@/component/layouts/Header";
import { blog } from "@/models/site";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.scss";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "300"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${blog.domain}/`),
  title: `${blog.title} | ${blog.subTitle}`,
  description: blog.description,
  openGraph: {
    title: `${blog.title} | ${blog.subTitle}`,
    siteName: blog.title,
    description: blog.description,
    url: `https://${blog.domain}/`,
    type: "website",
    images: `https://${blog.domain}/images/ogp.png`,
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: site.title,
  //   images: `https://${site.domain}/images/ogp.png`,
  // },
};

async function getNavItems() {
  // SSGのためのデータ取得
  return [
    { name: "ホーム", href: "/" },
    { name: "サービス", href: "/#service" },
    { name: "ブログ", href: "/blog" },
    { name: "私について", href: "/#about" },
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
