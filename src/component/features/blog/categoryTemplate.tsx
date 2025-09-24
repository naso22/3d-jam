import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import PostView from "@/component/features/blog/postView/PostView";
import SideBar from "@/component/layouts/SideBar";
import { client } from "@/libs/client";
import { BlogResponse } from '@/models/blog';

// 定数定義
const CATEGORY_BLOG_LIMIT = 8;

// カテゴリー別ブログデータ取得関数
const fetchCategoryBlogList = async (
	categorySlug: string, 
	currentPage: number, 
	limit: number = CATEGORY_BLOG_LIMIT
): Promise<BlogResponse> => {
	return await client.get({
		endpoint: "blog",
		queries: {
			limit,
			filters: `category[contains]${categorySlug}`,
			offset: (currentPage - 1) * limit,
		},
	});
};

interface CategoryTemplateProps {
	categorySlug: string;
	currentPage: number;
}

export default async function CategoryTemplate({ 
	categorySlug, 
	currentPage 
}: CategoryTemplateProps) {
	const blogList = await fetchCategoryBlogList(categorySlug, currentPage);

	const pathData = { 
		path: `/category/${categorySlug}/page`, 
		page: currentPage 
	};

	const breadcrumbData = [{ name: "ホーム", href: "/" }];

	return (
		<div>
			<div className="content__wrapper">
				<div className="content post">
					<div className="content__inner">
						<main className="blog-list-page main_content">
							<BreadcrumbComponent breadcrumbData={breadcrumbData} />
							<h1>{`${blogList.contents[0]?.category[0]?.title}記事の一覧`}</h1>
							<PostView
								blogList={{ newBlog: blogList.contents }}
								totalCount={blogList.totalCount}
								limit={CATEGORY_BLOG_LIMIT}
								currentPage={pathData}
								showTab={false}
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
export async function generateCategoryStaticParams() {
	const categoryResponse = await client
		.get({
			endpoint: "category",
		})
		.then((res) => res);

	const categoryData = await categoryResponse;
	const categories = categoryData.contents;

	const paths = [];

	for (const category of categories) {
		const blogList = await client
			.get({
				endpoint: "blog",
				queries: { limit: CATEGORY_BLOG_LIMIT, filters: `category[contains]${category.id}` },
			})
			.then((res) => res);

		const totalCount = blogList.totalCount;
		const totalPages = Math.ceil(totalCount / CATEGORY_BLOG_LIMIT);

		for (let i = 1; i <= totalPages; i++) {
			paths.push({
				id: i.toString(),
				slug: category.id,
			});
		}
	}

	return paths;
}
