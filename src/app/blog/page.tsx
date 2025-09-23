import { blog } from '@/models/site';
import type { Metadata } from 'next';
import BlogTemplate from '@/component/features/blog/template';
export const metadata: Metadata = {
	title: `${blog.title} | ${blog.subTitle}`,
	description: blog.description,
};

export default async function BlogPage() {
	return (
		<BlogTemplate />
	);
}
