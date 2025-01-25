import AboutSection from "@/component/home/AboutSection/AboutSection";
import BlogSection from "@/component/home/BlogSection/BlogSection";
import FirstView from "@/component/home/firstView/FirstView";
import ServiceSection from "@/component/home/ServiceSection/ServiceSection";
import Footer from "@/component/layouts/Footer";
import styles from "./page.module.scss";

// async function getBlogList() {
//   const res = await fetch("https://3d-jam.microcms.io/api/v1/blog?limit=3", {
//     headers: {
//       "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7",
//       cache: "no-store"
//     },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// }

export default async function App() {
  // const blogList = await getBlogList();
  return (
    <>
      <main className="content__wrapper top">
        <FirstView />
        <div id="service" className={styles.section}>
          <ServiceSection />
        </div>
        <div className={styles.blog} id="blog">
          <BlogSection  />
        </div>

        <div className={styles.aboutMe} id="about">
          <AboutSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
