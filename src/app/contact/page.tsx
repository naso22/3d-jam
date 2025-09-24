import SideBar from "@/component/layouts/SideBar";
import { site } from "@/models/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `お問い合わせ | jamな男`,
  description: "モダンなフロントエンド技術で高速で安全なWEBサイトを作ります",
  openGraph: {
    title: `お問い合わせ | jamな男`,
    siteName: `${site.title} | ${site.subTitle} `,
    description: 'モダンなフロントエンド技術で高速で安全なWEBサイトを作ります',
    url: `https://${site.domain}/jamstackHp`,
    type: "website",
    images: `https://${site.domain}/images/ogp.png`,
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="content__wrapper">
        <div className="content">
          <div className="content__inner">
            
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSesErUfL7ghRz2m5BHDUItgeLZ_ImoxsR3U_cpgSmY_28rtjA/viewform?embedded=true"
              width="1040"
              height="1000"
              frameBorder="0"
              className="contact"
            >
              読み込んでいます…
            </iframe>
            
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}
