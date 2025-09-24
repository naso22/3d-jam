import { ArticleTemplateProps } from "./types/article";
import { 
	fetchArticle, 
	ArticleNotFoundError, 
	ArticleServiceError 
} from "./services/articleService";
import ArticleLayout from "./article/components/ArticleLayout";
import ArticleContent from "./article/ArticleContent";
import ErrorState from "./article/components/ErrorState";

/**
 * 記事テンプレートコンポーネント
 * 記事の取得と表示を管理する
 */
export default async function ArticleTemplate({ slug }: ArticleTemplateProps) {
	try {
		const article = await fetchArticle(slug);
		
		return (
			<ArticleLayout>
				<ArticleContent article={article} />
			</ArticleLayout>
		);
	} catch (error) {
		console.error("記事の取得中にエラーが発生しました", error);
		
		// エラータイプに応じて適切なメッセージを表示
		if (error instanceof ArticleNotFoundError) {
			return <ErrorState message="記事が見つかりませんでした。" />;
		}
		
		if (error instanceof ArticleServiceError) {
			return <ErrorState message="記事の取得中にエラーが発生しました。" />;
		}
		
		// 予期しないエラー
		return <ErrorState message="予期しないエラーが発生しました。" />;
	}
}

// 他のモジュールからエクスポートされた関数を再エクスポート
export { generateArticleStaticParams } from "./services/metadataService";
export { generateArticleMetadata } from "./services/metadataService";
