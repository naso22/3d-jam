import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
export async function generateStaticParams() {
  // カテゴリのデータを取得
  const apiKey = "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7";
  const categoryResponse = await fetch(`https://3d-jam.microcms.io/api/v1/category`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  const categoryData = await categoryResponse.json();
  const categories = categoryData.contents;

  const paths = [];

  for (const category of categories) {
    // 各カテゴリのブログ記事を取得し、ページ数を算出
    const blogList = await fetch(
      `https://3d-jam.microcms.io/api/v1/blog?filters=category[contains]${category.id}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": apiKey,
        },
      }
    ).then((res) => res.json());

    const totalCount = blogList.totalCount;
    const totalPages = Math.ceil(totalCount / 8); // 1ページに8件表示する場合
    console.log(totalCount+'@@@@@')

    // 各カテゴリのページごとにパスを生成
    for (let i = 1; i <= totalPages; i++) {
      paths.push({
        id: i.toString(),
        slug: category.id, // 各カテゴリのidをslugとして使用
      });
    }
  }

  return paths;
}


export default async function Home({
  params,
}: {
  params: { id: string,slug:string };
}) {
  const currentPage = parseInt(params.id);
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

  const pathData ={path:`/category/${params.slug}/page`,page:currentPage}

  const breadcrumbData = [{ name: "ホーム", href: "/" }];
  return (
    <div>
      <div className="content__wrapper">
        <div className="content post">
          <div className="content__inner">
            <main className="blog-list-page">
              <BreadcrumbComponent breadcrumbData={breadcrumbData} />
              <h1>{blogList.contents[0].category[0].title} 記事の一覧</h1>
              <PostView
                blogList={{newBlog:blogList.contents}}
                totalCount={blogList.totalCount}
                limit={8}
                currentPage={pathData}
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
