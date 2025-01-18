import BlogCard from "@/component/card/BlogCard";
import AnaliuticsIcon from "@/component/icon/Analiytics";
import Develop from "@/component/icon/Develop";
import DocumentIcon from "@/component/icon/Document";
import PcIcon from "@/component/icon/Pc";
import Footer from "@/component/layouts/Footer";
import ParticleCube from "@/component/particleCube/ParticleCube";
import { client } from "@/libs/client";
import { site } from "@/models/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
type BlogCategory = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  category: BlogCategory[];
};

type BlogPost = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  contents: BlogCategory[];
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}/`),
  title: `${site.title} | ${site.subTitle}`,
  description: site.description,
  openGraph: {
    title: `${site.title} | ${site.subTitle}`,
    siteName: site.title,
    description: site.description,
    url: `https://${site.domain}/`,
    type: "website",
    images: `https://${site.domain}/images/ogp.png`,
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: site.title,
  //   images: `https://${site.domain}/images/ogp.png`,
  // },
};

export default async function App() {
  const blogList: BlogPost = await client
    .get({
      endpoint: "blog",
      queries: { limit: 3 },
    })
    .then((res) => res);
  return (
    <>
      <main className="content__wrapper top">
        <div className="fv">
          <div className={styles.fv_inner}>
            {/* <ParticleCube /> */}
            <div className={styles.main}>
              <div className={styles.main_inner}>
                <h1 className={styles.main_title}>
                  Create
                  <br />
                  Jamstack
                </h1>
                <p className={styles.sub_title}>
                  モダンな技術で高速で安全なWEBサイトを作ります
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="service" className={styles.section}>
          <div className={styles.service}>
            <div className="service_inner">
              <h2 className={styles.title_eng}>Service</h2>
              <p className={styles.title}>サービス内容</p>
              <div className={styles.service_content}>
                <div className={`${styles.box} ${styles.box1}`}>
                  <Link href={"/jamstackHp"}>
                    <div className={styles.service_title}>
                      <span className={styles.icon}>
                        <PcIcon />
                      </span>
                      Jamstack サイト制作
                    </div>
                    <p className={`${styles.discription}`}>
                      Jamstack技術を駆使した高速で安全なWebサイトを構築いたします。
                      <br />
                      SEO対策、レスポンジブ対応を行い、訪れたユーザーに信頼されるWebサイトを制作致します
                    </p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#818181"
                        className={styles.more_icon}
                      >
                        <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                      </svg>
                    </div>
                  </Link>
                </div>

                <div className={`${styles.box} ${styles.box2}`}>
                  <Link href={""}>
                    <div className={styles.service_title}>
                      <span className={styles.icon}>
                        <DocumentIcon />
                      </span>
                      ヘッドレスCMS 構築/導入
                    </div>
                    <p className={`${styles.discription}`}>
                      ニーズや目的に沿ったWebデザインを提案・制作いたします。
                      <br />
                      見やすく、伝わるを意識した、オリジナルなデザインを作成いたします
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#818181"
                      className={styles.more_icon}
                    >
                      <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                    </svg>
                  </Link>
                </div>
                <div className={`${styles.box} ${styles.box3}`}>
                  <Link href={""}>
                    <div className={styles.service_title}>
                      <span className={styles.icon}>
                        <Develop />
                      </span>
                      フロントエンド開発
                    </div>
                    <p className={`${styles.discription}`}>
                      Next.js,React,TypeScriptを開発を中心にフロントエンド開発をいたします。
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#818181"
                      className={styles.more_icon}
                    >
                      <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                    </svg>
                  </Link>
                </div>
                <div className={`${styles.box} ${styles.box3}`}>
                  <Link href={""}>
                    <div className={styles.service_title}>
                      <span className={styles.icon}>
                        <AnaliuticsIcon />
                      </span>
                      サイト保守・運用
                    </div>
                    <p className={`${styles.discription}`}>
                      KW選定やgoogle analyticsを使ったデータ分析により
                      CV率、集客力の向上を目指します
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#818181"
                      className={styles.more_icon}
                    >
                      <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blog} id="blog">
          <div className="service_inner">
            <div className={styles.blog_inner}>
              <h2 className={styles.title_eng}>Blog</h2>
              <p className={styles.title}>ブログ</p>
              <div className={styles.blog_content}>
                {blogList.contents.map((blog, index) => {
                  return <BlogCard key={index} blog={blog} />;
                })}
              </div>
              <div className={styles.blogMoreContent}>
                <Link href={`/blog`}>
                  <p className={styles.blog_btn}>ブログ一覧へ</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutMe} id="about">
          <div className={styles.aboutMe_wrapper}>
            <div>
              <Image
                src="/shikrokuma.jpg" // 画像のパスを指定
                className={styles.aboutIcon}
                alt="aiconイメージ"
                layout="responsive"
                width={100} // 画像の幅を指定
                height={100} // 画像の高さを指定
              />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <p>長野　冷</p>
            <p>
              東京都江戸川区を拠点にフロントエンドエンジニアをしています。
              <br />
              UI・UXに優れたWEBサイト制作を得意としています。
              <br />
            </p>
            <p>
              Next.js / React / Vue.js TypeScript / Vercel / ampyfly / vercel /
              Figuma
            </p>
            <p className={styles.sns}>
              <a href="https://x.com/wGOGNc30tFGCCiA">X</a>
            </p>
            <Link href={`/contact`}>
              <p className={styles.contact_btn}>お問い合わせ</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
