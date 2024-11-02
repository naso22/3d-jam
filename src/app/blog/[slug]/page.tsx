// app/blog/[slug]/page.tsx
import ArticleComponent from "@/component/article/ArticleComponent";
import Footer from "@/component/layouts/Footer";
import SideBar from "@/component/sideBar/SideBar";
import { client } from "@/libs/client";
import { blog } from "@/models/site";
import { Metadata } from "next";
export async function generateStaticParams() {
  const articles = await client
    .get({
      endpoint: "blog",
    })
    .then((res) => res);

  // 各記事のidをslugとして返す
  return articles.contents.map((article: { id: string }) => ({
    slug: article.id,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const res = await client
    .get({
      endpoint: "blog",
      contentId: params.slug,
    })
    .then((res) => res);
  const data = await res;

  return {
    openGraph: {
    title: `${data.title}`,
    description: `${data.title}`,
      url: `https://${blog.domain}/blog/${params.slug}`,
    },
  };
};

// 2. ArticlePageコンポーネント
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await client
    .get({
      endpoint: "blog",
      contentId: params.slug,
    })
    .then((res) => res);

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
