// app/blog/[slug]/page.tsx
import Footer from "@/component/layouts/Footer";
import SideBar from "@/component/sideBar/SideBar";
import { client } from "@/libs/client";
import { blog } from "@/models/site";
import { Metadata } from "next";
import ArticleComponent from "@/component/article/ArticleComponent";
// 1. Static Params生成
export async function generateStaticParams() {
  try {
    const { contents } = await client.get({
      endpoint: "blog",
    });
    return contents.map((article: { id: string }) => ({
      slug: article.id,
    }));
  } catch (error) {
    console.error("Error fetching blog articles:", error);
    return [{ slug: "default" }];
  }
}

// 2. Metadata生成
export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  try {
    if (params.slug === "default") {
      return {
        openGraph: {
          title: "Default Article",
          description: "Default article description",
          url: `https://${blog?.domain}/blog/default`,
        },
      };
    }

    const article = await client.get({
      endpoint: "blog",
      contentId: params.slug,
    });

    return {
      openGraph: {
        title: article?.title || "No Title",
        description: article?.description || "No description",
        url: `https://${blog?.domain}/blog/${params.slug}`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {openGraph: {
      title:  "No Title",
      description: "No description",
      url: `https://${blog?.domain}/blog/${params.slug}`,
    },};
  }
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug === "default") {
    return (
      <>
        <div className="content__wrapper">
          <div className="content">
            <div className="content__inner">
              <div style={{ marginTop: "100px", height: "50vh" }}>
                記事が見つかりませんでした。
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  try {
    // APIリクエストで記事を取得
    const article = await client.get({
      endpoint: "blog",
      contentId: params.slug,
    });

    console.log(article + 'DDDDDDD')

    return (
      <>
        <div className="content__wrapper">
          <div className="content">
            <div className="content__inner">
              <ArticleComponent
                blogUrl={article?.id}
                title={article?.title}
                mainVisual={article?.mainVisual?.url}
                articleContent={article?.content}
              />
              <SideBar />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("記事の取得中にエラーが発生しました", error);
    return (
      <>
        <div className="content__wrapper">
          <div className="content">
            <div className="content__inner">
              <div style={{ marginTop: "100px", height: "50vh" }}>
                記事の取得中にエラーが発生しました。
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
