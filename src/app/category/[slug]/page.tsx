import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
export async function generateStaticParams() {
  // APIから記事データを取得
  //   const limit = 6; // 1ページあたりの表示件数
  const apiKey = "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7"; // APIキーを挿入
  const response = await fetch(`https://3d-jam.microcms.io/api/v1/category`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });
  const data = await response.json();

  //   const totalCount = data.totalCount;
  //   const totalPages = Math.ceil(totalCount / limit);

  return data.contents.map((category: { id: string }) => ({
    slug: category.id,
  }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const currentPage = 1;
  const blogList = await fetch(
    `https://3d-jam.microcms.io/api/v1/blog?filters=category[contains]${
      params.slug
    }&limit=8&offset=${(currentPage - 1) * 8}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7", // ここにAPIキーを挿入
      },
    }
  ).then((res) => res.json());
  console.log(blogList.contents[0].category[0].title);
  const breadcrumbData = [
    {name:"ホーム",href:'/'},
  ]
  return (
    <div>
      <div className="content__wrapper">
        <div className="content post">
          <div className="content__inner">
            <main className="blog-list-page">
              <BreadcrumbComponent breadcrumbData={breadcrumbData}/>
              <h1>{blogList.contents[0].category[0].title} 記事の一覧</h1>
              <PostView
                blogList={blogList.contents}
                totalCount={blogList.totalCount}
                limit={8}
                currentPage={1}
                showTab={false}
              />
            </main>
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
