import PostView from '@/component/features/blog/postView/PostView';
import SideBar from '@/component/layouts/SideBar';
import SlideShow from '@/component/features/blog/slideShow/SlideShow';
import { client } from '@/libs/client';
import { BlogPost, BlogResponse, BlogData } from '@/models/blog';

// 定数定義
const BLOG_LIMIT = 6;
const CATEGORY_IDS = ['835ils8h-m9', 'dxsdioak6fo', 'i46_ji_93mrf'] as const;

// ブログデータ取得関数
const fetchBlogList = async (limit: number = BLOG_LIMIT): Promise<BlogResponse> => {
	return await client.get({
		endpoint: 'blog',
		queries: { limit },
	});
};

const fetchCategoryBlogs = async (categoryIds: readonly string[]): Promise<BlogPost[]> => {
	const categoryBlogPromises = categoryIds.map(categoryId =>
		client.get({
			endpoint: 'blog',
			queries: { 
				limit: BLOG_LIMIT, 
				filters: `category[contains]${categoryId}` 
			},
		})
	);

	const categoryResults = await Promise.all(categoryBlogPromises);
	return categoryResults.flatMap(result => result.contents);
};

export default async function BlogTemplate() {
	// 新着ブログとカテゴリ別ブログを並列で取得
	const [blogList, categoryBlogContents] = await Promise.all([
		fetchBlogList(),
		fetchCategoryBlogs(CATEGORY_IDS),
	]);

	const totalBlogList: BlogData = {
		newBlog: blogList.contents,
		categoryBlog: categoryBlogContents,
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
								limit={BLOG_LIMIT}
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