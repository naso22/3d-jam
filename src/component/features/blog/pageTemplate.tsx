import Footer from '@/component/layouts/Footer';
import PostView from '@/component/features/blog/postView/PostView';
import SideBar from '@/component/layouts/SideBar';
import SlideShow from '@/component/features/blog/slideShow/SlideShow';
import { client } from '@/libs/client';
import { BlogPost, BlogResponse, BlogData } from '@/models/blog';

// 定数定義
const BLOG_LIMIT = 6;
const CATEGORY_IDS = ['835ils8h-m9', 'dxsdioak6fo', 'i46_ji_93mrf'] as const;

// ブログデータ取得関数
const fetchBlogList = async (currentPage: number, limit: number = BLOG_LIMIT): Promise<BlogResponse> => {
	return await client.get({
		endpoint: 'blog',
		queries: { limit, offset: (currentPage - 1) * limit },
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

interface PageTemplateProps {
	currentPage: number;
}

export default async function PageTemplate({ currentPage }: PageTemplateProps) {
	// 新着ブログとカテゴリ別ブログを並列で取得
	const [blogList, categoryBlogContents] = await Promise.all([
		fetchBlogList(currentPage),
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
								currentPage={{ path: '/page', page: currentPage }}
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

// 静的パス生成関数をエクスポート
export async function generatePageStaticParams() {
	const limit = BLOG_LIMIT;
	const response = await client.get({ endpoint: 'blog' });
	const data = await response;

	const totalCount = data.totalCount;

	// totalCountが0の場合は空の配列を返す
	if (totalCount === 0) {
		return [{ id: '1' }];
	}

	const totalPages = Math.ceil(totalCount / limit);

	// 各ページのパラメータを生成
	const paths = Array.from({ length: totalPages }, (_, index) => ({
		id: (index + 1).toString(),
	}));

	return paths;
}
