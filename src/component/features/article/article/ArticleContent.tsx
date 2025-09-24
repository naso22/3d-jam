import ArticleComponent from "@/component/features/article/article/components/ArticleComponent";
import SideBar from "@/component/layouts/SideBar";
import { Article } from "@/component/features/article/types/article";

interface ArticleContentProps {
	article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
	return (
		<>
			<ArticleComponent
				blogUrl={article.id}
				title={article.title}
				mainVisual={article.mainVisual?.url ?? ""}
				articleContent={article.content}
			/>
			<SideBar />
		</>
	);
}
