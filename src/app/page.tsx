import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import SlideShow from "@/component/slideShow/SlideShow";


export default async function Home() {
  const blogList = await fetch(
    `https://3d-jam.microcms.io/api/v1/blog/`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7", // ここにAPIキーを挿入
      },
    }
  ).then((res) => res.json());

  console.log(blogList)

  return (
    <div>
      <div className="content__wrapper">
        <SlideShow />
        <div className="content post">
          <div className="content__inner">
            <PostView blogList={blogList.contents}/>
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
