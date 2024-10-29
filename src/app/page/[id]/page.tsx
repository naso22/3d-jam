import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import SlideShow from "@/component/slideShow/SlideShow";

export async function generateStaticParams() {
  // APIから記事データを取得
  const limit = 6; // 1ページあたりの表示件数
  const apiKey = "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7"; // APIキーを挿入
  const response = await fetch(`https://3d-jam.microcms.io/api/v1/blog`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });
  const data = await response.json();

  // 総記事数を取得
  const totalCount = data.totalCount;
  const totalPages = Math.ceil(totalCount / limit); // ページ数を計算

  // 各ページのパラメータを生成
  const paths = Array.from({ length: totalPages }, (_, index) => ({
    id: (index + 1).toString(),
  }));

  return paths;
}

export default async function Home({ params }: { params: { id: string } }) {
  const currentPage = parseInt(params.id);
  const blogList = await fetch(
    `https://3d-jam.microcms.io/api/v1/blog?limit=6&offset=${
      (currentPage - 1) * 6
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
        <SlideShow />
        <div className="content post">
          <div className="content__inner">
            <PostView
              blogList={blogList.contents}
              totalCount={blogList.totalCount}
              limit={6}
              currentPage={currentPage}
              showTab={true}
            />
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
