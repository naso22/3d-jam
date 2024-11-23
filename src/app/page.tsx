import BlogCard from "@/component/card/BlogCard";
import AnaliuticsIcon from "@/component/icon/Analiytics";
import Develop from "@/component/icon/Develop";
import DocumentIcon from "@/component/icon/Document";
import PcIcon from "@/component/icon/Pc";
import Footer from "@/component/layouts/Footer";
import ParticleCube from "@/component/particleCube/ParticleCube";
import { client } from "@/libs/client";
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
            <ParticleCube />
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
        <div className={styles.section}>
          <div className={styles.service}>
            <div className="service_inner">
              <h2 className={styles.title}>Service</h2>
              <div className={styles.service_content}>
                <div className={`${styles.box} ${styles.box1}`}>
                  <Link href={""}>
                    <div className={styles.service_title}>
                      <span className={styles.icon}>
                        <PcIcon />
                      </span>
                      Jamstack HP制作
                    </div>
                    <p className={`${styles.discription}`}>
                      Jamstack技術を使って高速で安全なWEBサイトを構築いたします。{" "}
                      <br />
                      SEO対策、レスポンジブ対応を行い、集客できる強いHPを制作します
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
                      Jamstack LP制作
                    </div>
                    <p className={`${styles.discription}`}>
                      Jamstack技術を使って高速で安全なランディングページを作成いたします。{" "}
                      <br />
                      SEO対策、レスポンジブ対応を行い、CVを上げるLPを制作します
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
                      Next.js,React,TypeScriptによるフロントエンド開発を中心にコーディングをしています。
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
        <div className={styles.blog}>
          <div className="service_inner">
            <div className={styles.blog_inner}>
              <h2 className={styles.title}>Blog</h2>
              <div className={styles.blog_content}>
                {blogList.contents.map((blog, index) => {
                  return <BlogCard key={index} blog={blog} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className="service_inner">
            <div className={styles.about_content}>
              <div>
                <div className={styles.about_title}>
                  <div className={styles.title}>Contact</div>
                  <p>お問い合わせ</p>
                </div>
                <p>
                  東京都江戸川区を拠点にフロントエンドエンジニアをしています。
                  <br />
                  Next.js,React,TypeScriptを使った、サイト制作/アプリ開発を得意としています。
                </p>
              </div>
              <Link href={"/contact"} className={styles.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  className={styles.arrow_icon}
                >
                  <path
                    d="M16.175 9H0.5V7H16.175L10.575 1.4L12 0L20 8L12 16L10.575 14.6L16.175 9Z"
                    fill="#E8EAED"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
