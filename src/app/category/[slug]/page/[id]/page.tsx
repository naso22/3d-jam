import CategoryTemplate, { generateCategoryStaticParams } from "@/component/features/blog/categoryTemplate";

export async function generateStaticParams() {
  return await generateCategoryStaticParams();
}

export default async function Home({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const currentPage = parseInt(params.id);

  return (
    <CategoryTemplate categorySlug={params.slug} currentPage={currentPage} />
  );
}
