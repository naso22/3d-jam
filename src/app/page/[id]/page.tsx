import Footer from "@/component/layouts/Footer";
import PostView from "@/component/postView/PostView";
import SideBar from "@/component/sideBar/SideBar";
import SlideShow from "@/component/slideShow/SlideShow";
import { client } from "@/libs/client";
import { blog } from "@/models/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${blog.title} | ${blog.subTitle}`,
  description: blog.description,
};

export async function generateStaticParams() {
  const limit = 6; // 1ページあたりの表示件数
  const response = await client.get({ endpoint: "blog" });
  const data = await response;

  const totalCount = data.totalCount;

  // totalCountが0の場合は空の配列を返す

  const totalPages = Math.ceil(totalCount / limit); // ページ数を計算

  // 各ページのパラメータを生成
  const paths = Array.from({ length: totalPages }, (_, index) => ({
    id: (index + 1).toString(),
  }));

  return paths;
}

export default async function Home({ params }: { params: { id: string } }) {
  const currentPage = parseInt(params.id);

  const blogList = await client
    .get({
      endpoint: "blog",
      queries: { limit: 6, offset: (currentPage - 1) * 6 },
    })
    .then((res) => res);

  const categoresList = ["835ils8h-m9", "dxsdioak6fo", "i46_ji_93mrf"];
  const categoryBlog = [];

  for (const category of categoresList) {
    const categoryBlogList = await client
      .get({
        endpoint: "blog",
        queries: { limit: 6, filters: `category[contains]${category}` },
      })
      .then((res) => res);

    categoryBlog.push(...categoryBlogList.contents);
  }

  const totalBlogList = {
    newBlog: blogList.contents,
    categoryBlog: categoryBlog,
  };

  return (
    <div>
      <div className="content__wrapper">
        <SlideShow />
        <div className="content post">
          <div className="content__inner">
            <main className="main_content">
              <PostView
                blogList={totalBlogList}
                totalCount={blogList.totalCount}
                limit={6}
                currentPage={{ path: "/page", page: currentPage }}
                showTab={true}
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
