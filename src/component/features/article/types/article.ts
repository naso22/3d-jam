export interface Article {
	id: string;
	title: string;
	content: string;
	description?: string;
	mainVisual?: {
		url: string;
	};
}

export interface ArticleResponse {
	contents: Article[];
	totalCount: number;
}

export interface ArticleTemplateProps {
	slug: string;
}
