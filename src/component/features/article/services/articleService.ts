import { client } from "@/libs/client";
import { Article, ArticleResponse } from "../types/article";

export class ArticleNotFoundError extends Error {
	constructor(slug: string) {
		super(`Article with slug "${slug}" not found`);
		this.name = "ArticleNotFoundError";
	}
}

export class ArticleServiceError extends Error {
	constructor(message: string, cause?: Error) {
		super(message);
		this.name = "ArticleServiceError";
		this.cause = cause;
	}
}

/**
 * 記事データを取得する
 */
export async function fetchArticle(slug: string): Promise<Article> {
	if (slug === "default") {
		throw new ArticleNotFoundError(slug);
	}

	try {
		const article = await client.get({
			endpoint: "blog",
			contentId: slug,
		});

		if (!article) {
			throw new ArticleNotFoundError(slug);
		}

		return article as Article;
	} catch (error) {
		if (error instanceof ArticleNotFoundError) {
			throw error;
		}
		throw new ArticleServiceError(
			"記事の取得中にエラーが発生しました",
			error as Error
		);
	}
}

/**
 * 記事一覧を取得する（静的パス生成用）
 */
export async function fetchAllArticles(): Promise<ArticleResponse> {
	try {
		const response = await client.get({
			endpoint: "blog",
		});

		return response as ArticleResponse;
	} catch (error) {
		throw new ArticleServiceError(
			"記事一覧の取得中にエラーが発生しました",
			error as Error
		);
	}
}
