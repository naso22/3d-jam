import Footer from "@/component/layouts/Footer";
import SideBar from "@/component/sideBar/SideBar";

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
      <Footer />
    </>
  );
}
