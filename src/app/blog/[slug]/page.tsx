// app/blog/[slug]/page.tsx
import ArticleComponent from "@/component/article/ArticleComponent";
import Footer from "@/component/layouts/Footer";
import SideBar from "@/component/sideBar/SideBar";
// 1. generateStaticParamsの追加
export async function generateStaticParams() {
  // APIから記事データを取得
  const articles = await fetch("https://3d-jam.microcms.io/api/v1/blog", {
    headers: {
      "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7", // ここにAPIキーを挿入
    },
  }).then((res) => res.json());

  console.log(articles)

  // 各記事のidをslugとして返す
  return articles.contents.map((article: { id: string }) => ({
    slug: article.id,
  }));
}

// 2. ArticlePageコンポーネント
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  // 記事データをslug（id）で取得
  const article = await fetch(
    `https://3d-jam.microcms.io/api/v1/blog/${params.slug}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "bxIFdC5L3HBD7E2sOtaKfl9EbH8bUDWolax7", // ここにAPIキーを挿入
      },
    }
  ).then((res) => res.json());

  return (
    <>
      <div className="content__wrapper">
        <div className="content">
          <div className="content__inner">
            <ArticleComponent
              blogUrl={article.id}
              title={article.title}
              mainVisual={article.mainVisual.url}
              articleContent={article.content}
            />
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
