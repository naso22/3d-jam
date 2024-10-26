import Footer from "@/component/layouts/Footer";
import Header from "@/component/layouts/Header";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import SlideShow from "@/component/slideShow/SlideShow";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content__wrapper">
        <SlideShow />
        <div className="content post">
          <div className="content__inner">
            <PostView />
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
