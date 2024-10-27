import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import SlideShow from "@/component/slideShow/SlideShow";

export async function generateStaticParams() {
  // APIから記事データを取得
  const limit = 6; // 1ページあたりの表示件数
  const apiKey = "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7"; // APIキーを挿入
  const response = await fetch(`https://3d-jam.microcms.io/api/v1/category`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });
  const data = await response.json();

  const totalCount = data.totalCount;
  const totalPages = Math.ceil(totalCount / limit); 

  return data.contents.map((category: { id: string }) => ({
    slug: category.id,
  }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const currentPage = 1;
  console.log(params)
  const blogList = await fetch(
    `https://3d-jam.microcms.io/api/v1/blog?filters=category[contains]${params.slug}&limit=8&offset=${
      (currentPage - 1) * 8
    }`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7", // ここにAPIキーを挿入
      },
    }
  ).then((res) => res.json());
  return (
    <div>
      <div className="content__wrapper">
        <div className="content post">
          <div className="content__inner">
            <PostView
              blogList={blogList.contents}
              totalCount={blogList.totalCount}
              currentPage={1}
            />
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
