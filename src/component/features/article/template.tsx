import ArticleComponent from "@/component/article/ArticleComponent";
import Footer from "@/component/layouts/Footer";
import SideBar from "@/component/layouts/SideBar";
import { client } from "@/libs/client";
import { blog } from "@/models/site";

interface ArticleTemplateProps {
	slug: string;
}

export default async function ArticleTemplate({ slug }: ArticleTemplateProps) {
	// デフォルトケースの処理
	if (slug === "default") {
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
			</>
		);
	}

	try {
		// APIリクエストで記事を取得
		const article = await client.get({
			endpoint: "blog",
			contentId: slug,
		});

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
			</>
		);
	}
}

// 静的パス生成関数をエクスポート
export async function generateArticleStaticParams() {
	const { contents, totalCount } = await client.get({
		endpoint: "blog",
	});
	
	if (!totalCount) {
		return [{ slug: "default" }];
	}

	return contents.map((article: { id: string }) => ({
		slug: article.id,
	}));
}

// メタデータ生成関数をエクスポート
export async function generateArticleMetadata(slug: string) {
	try {
		if (slug === "default") {
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
			contentId: slug,
		});

		return {
			title: article?.title,
			openGraph: {
				title: article?.title || "No Title",
				description: article?.description || "No description",
				url: `https://${blog?.domain}/blog/${slug}`,
			},
		};
	} catch (error) {
		console.error("Error fetching metadata:", error);
		return {
			openGraph: {
				title: "No Title",
				description: "No description",
				url: `https://${blog?.domain}/blog/${slug}`,
			},
		};
	}
}
