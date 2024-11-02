import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import SlideShow from "@/component/slideShow/SlideShow";


export default async function Home() {

  const blogList = await fetch(
    `https://3d-jam.microcms.io/api/v1/blog?limit=6`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7", // ここにAPIキーを挿入
      },
      
    }
  ).then((res) => res.json());

  const categoresList = ['835ils8h-m9',"dxsdioak6fo"]

  const categoryBlog = []

  for (const category of categoresList) {
    const categoryBlogList = await fetch(
      `https://3d-jam.microcms.io/api/v1/blog?limit=6&filters=category[contains]${category}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7",
        },
      }
    ).then((res) => res.json());

    console.log(categoryBlogList.contents.length)
    categoryBlog.push(...categoryBlogList.contents);
  }

  const totalBlogList = {newBlog:blogList.contents,categoryBlog:categoryBlog}

  return (
    <div>
      <div className="content__wrapper">
        <SlideShow />
        <div className="content post">
          <div className="content__inner">
            <PostView blogList={totalBlogList} totalCount={blogList.totalCount} limit={6} currentPage={{path:'/page',page:1}} showTab={true}/>
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
