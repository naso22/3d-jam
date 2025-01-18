import MainVisual from "@/component/jamstackHp/top/MainVisual";
import WorriesCompo from "@/component/jamstackHp/Worries/WorriesCompo";
import MeritSection from "@/component/jamstackHp/MeritSection/MeritSection";
import AboutSection from "@/component/jamstackHp/AboutSection/AboutSection";
import ServicesSection from "@/component/jamstackHp/serviceSection/ServiceSection";
import ProcessSection from "@/component/jamstackHp/processSection/ProcessSection";
import PriceSection from "@/component/jamstackHp/PriceSection/PriceSection";
import BlogSection from "@/component/jamstackHp/BlogSection/BlogSection";
import ContactSection from "@/component/jamstackHp/ContactSection/ContactSection";
// import styles from "../page.module.scss";
import { client } from "@/libs/client";
import Footer from "@/component/layouts/Footer";
import { site } from "@/models/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}/jamstackHp`),
  title: `Jamstackサイト制作 | サービス`,
  description: 'モダンなフロントエンド技術で高速で安全なWEBサイトを作ります',
  openGraph: {
    title: `Jamstackサイト制作 | サービス`,
    siteName: `${site.title} | ${site.subTitle} `,
    description: 'モダンなフロントエンド技術で高速で安全なWEBサイトを作ります',
    url: `https://${site.domain}/jamstackHp`,
    type: "website",
    images: `https://${site.domain}/images/ogp.png`,
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: site.title,
  //   images: `https://${site.domain}/images/ogp.png`,
  // },
};

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
export default async function Home() {
  const blogList: BlogPost = await client
    .get({
      endpoint: "blog",
      queries: { limit: 3 },
    })
    .then((res) => res);
  return (
    <>
      <main className="content__wrapper top">
        <MainVisual />
        <WorriesCompo />
        <MeritSection/>
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PriceSection />
        <BlogSection blogList={blogList}/>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
