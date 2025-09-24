import ArticleComponent from "@/component/features/article/article/ArticleComponent";
import SideBar from "@/component/layouts/SideBar";
import { Article } from "../types/article";

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
