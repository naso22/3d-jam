import "./globals.scss";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        {children}
      </body>
    </html>
  );
}
