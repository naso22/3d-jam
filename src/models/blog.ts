/**
 * ブログ関連の型定義
 */

export type BlogCategory = {
	id: string;
	title: string;
};

export type BlogPost = {
	id: string;
	title: string;
	mainVisual: {
		url: string;
	};
	category: BlogCategory[];
	updatedAt: string;
};

export interface BlogResponse {
	contents: BlogPost[];
	totalCount: number;
}

export interface BlogData {
	newBlog: BlogPost[];
	categoryBlog: BlogPost[];
}

export interface BlogListProps {
	newBlog: BlogPost[];
	categoryBlog?: BlogPost[];
}
