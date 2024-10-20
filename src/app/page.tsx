import Header from "@/component/layouts/Header";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import Footer from "@/component/layouts/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="content__inner">
        <PostView />
        <SideBar />
      </div>

      <Footer />

    </div>
  );
}
