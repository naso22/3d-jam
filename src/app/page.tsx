import AboutSection from "@/component/home/AboutSection/AboutSection";
import BlogSection from "@/component/home/BlogSection/BlogSection";
import FirstView from "@/component/home/firstView/FirstView";
import ServiceSection from "@/component/home/ServiceSection/ServiceSection";
import Footer from "@/component/layouts/Footer";
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
        <FirstView />
        <div id="service" className={styles.section}>
          <ServiceSection />
        </div>
        <div className={styles.blog} id="blog">
          <BlogSection blogList={blogList} />
        </div>

        <div className={styles.aboutMe} id="about">
          <AboutSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
