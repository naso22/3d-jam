import ArticleTemplate, { 
	generateArticleStaticParams, 
	generateArticleMetadata 
} from "@/component/features/article/template";
import { Metadata } from "next";

export async function generateStaticParams() {
	return await generateArticleStaticParams();
}

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	return await generateArticleMetadata(params.slug);
};

export default async function ArticlePage({
	params,
}: {
	params: { slug: string };
}) {
	return <ArticleTemplate slug={params.slug} />;
}
