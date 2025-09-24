import { blog } from "@/models/site";
import { fetchArticle } from "./articleService";

export interface ArticleMetadata {
	title?: string;
	openGraph: {
		title: string;
		description: string;
		url: string;
	};
}

/**
 * 記事のメタデータを生成する
 */
export async function generateArticleMetadata(slug: string): Promise<ArticleMetadata> {
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

		const article = await fetchArticle(slug);

		return {
			title: article.title,
			openGraph: {
				title: article.title || "No Title",
				description: article.description || "No description",
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

/**
 * 静的パス生成用のパラメータを生成する
 */
export async function generateArticleStaticParams() {
	try {
		const { fetchAllArticles } = await import("./articleService");
		const { contents, totalCount } = await fetchAllArticles();
		
		if (!totalCount) {
			return [{ slug: "default" }];
		}

		return contents.map((article) => ({
			slug: article.id,
		}));
	} catch (error) {
		console.error("Error generating static params:", error);
		return [{ slug: "default" }];
	}
}
