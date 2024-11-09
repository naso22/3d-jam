import BlogCard from "@/component/card/BlogCard";
import Footer from "@/component/layouts/Footer";
import ParticleCube from "@/component/particleCube/ParticleCube";
import { client } from "@/libs/client";
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
              <h1 className={styles.main_title}>3D-Jam</h1>
              <p className={styles.sub_title}>
                高速でモダンなWEBサイト制作
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.service}>
            <div className="service_inner">
              <h2 className={styles.title}>Service</h2>
              <div className={styles.service_content}>
                <div className={`${styles.box} ${styles.box1}`}>
                  <div>3D × Jamstack HP制作</div>
                  <p className={`${styles.discription}`}>
                    高速な読み込み速度やモバイル対応がしやすいことから、検索エンジンの評価が向上し、結果としてアクセス数の増加が期待できます。
                  </p>
                </div>
                <div className={`${styles.box} ${styles.box2}`}>
                  <div>Jamstack HP制作</div>
                  <p className={`${styles.discription}`}>
                    高速な読み込み速度やモバイル対応がしやすいことから、検索エンジンの評価が向上し、結果としてアクセス数の増加が期待できます。
                  </p>
                </div>
                <div className={`${styles.box} ${styles.box3}`}>
                  <div>フロントエンド開発</div>
                  <p className={`${styles.discription}`}>
                    高速な読み込み速度やモバイル対応がしやすいことから、検索エンジンの評価が向上し、結果としてアクセス数の増加が期待できます。
                  </p>
                </div>
                <div className={`${styles.box} ${styles.box3}`}>
                  <div>フロントエンド開発</div>
                  <p className={`${styles.discription}`}>
                    高速な読み込み速度やモバイル対応がしやすいことから、検索エンジンの評価が向上し、結果としてアクセス数の増加が期待できます。
                  </p>
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
                  東京都江戸川区を拠点にフロントエンドエンジニアとしており、
                  <br />
                  モダンな技術スタックを駆使した、UXに優れたWEBサイト構築を得意としています。
                  <br />
                  コミュニケーションを通じ、クライアントのビジネスに最適なデジタルソリューションをご提案致します。
                </p>
              </div>
              <div className={styles.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    d="M16.175 9H0.5V7H16.175L10.575 1.4L12 0L20 8L12 16L10.575 14.6L16.175 9Z"
                    fill="#E8EAED"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
