import PostView from '@/component/features/blog/postView/PostView';
import SideBar from '@/component/layouts/SideBar';
import SlideShow from '@/component/features/blog/slideShow/SlideShow';
import { client } from '@/libs/client';

export default async function BlogTemplate() {
	const blogList = await client
		.get({
			endpoint: 'blog',
			queries: { limit: 6 },
		})
		.then((res) => res);

	const categoresList = ['835ils8h-m9', 'dxsdioak6fo', 'i46_ji_93mrf'];

	const categoryBlog = [];

	for (const category of categoresList) {
		const categoryBlogList = await client
			.get({
				endpoint: 'blog',
				queries: { limit: 6, filters: `category[contains]${category}` },
			})
			.then((res) => res);

		categoryBlog.push(...categoryBlogList.contents);
	}

	const totalBlogList = {
		newBlog: blogList.contents,
		categoryBlog: categoryBlog,
	};

	return (
		<div>
			<div className="content__wrapper">
				<SlideShow blogList={totalBlogList} />
				<div className="content post">
					<div className="content__inner">
						<main className="main_content">
							<PostView
								blogList={totalBlogList}
								totalCount={blogList.totalCount}
								limit={6}
								currentPage={{ path: '/page', page: 1 }}
								showTab={true}
							/>
						</main>
						<SideBar />
					</div>
				</div>
			</div>
		</div>
	);
}