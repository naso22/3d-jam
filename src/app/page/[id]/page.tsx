import { blog } from '@/models/site';
import type { Metadata } from 'next';
import PageTemplate, { generatePageStaticParams } from '@/component/features/blog/pageTemplate';

export const metadata: Metadata = {
	title: `${blog.title} | ${blog.subTitle}`,
	description: blog.description,
};

export async function generateStaticParams() {
	return await generatePageStaticParams();
}

export default async function Home({ params }: { params: { id: string } }) {
	const currentPage = parseInt(params.id);

	return (
		<PageTemplate currentPage={currentPage} />
	);
}
