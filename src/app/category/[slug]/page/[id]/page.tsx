import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import { client } from "@/libs/client";
export async function generateStaticParams() {
  const categoryResponse = await client
    .get({
      endpoint: "category",
    })
    .then((res) => res);

  const categoryData = await categoryResponse;
  const categories = categoryData.contents;

  const paths = [];

  for (const category of categories) {
    const blogList = await client
      .get({
        endpoint: "blog",
        queries: { limit: 6, filters: `category[contains]${category.id}` },
      })
      .then((res) => res);

    const totalCount = blogList.totalCount;
    const totalPages = Math.ceil(totalCount / 8); // 1ページに8件表示する場合

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
  params: { id: string; slug: string };
}) {
  const currentPage = parseInt(params.id);

  const blogList = await client
    .get({
      endpoint: "blog",
      queries: {
        limit: 8,
        filters: `category[contains]${params.slug}`,
        offset: (currentPage - 1) * 8,
      },
    })
    .then((res) => res);

  const pathData = { path: `/category/${params.slug}/page`, page: currentPage };

  const breadcrumbData = [{ name: "ホーム", href: "/" }];
  return (
    <div>
      <div className="content__wrapper">
        <div className="content post">
          <div className="content__inner">
            <main className="blog-list-page main_content">
              <BreadcrumbComponent breadcrumbData={breadcrumbData} />
              <h1>{blogList.contents[0].category[0].title} 記事の一覧</h1>
              <PostView
                blogList={{ newBlog: blogList.contents }}
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
