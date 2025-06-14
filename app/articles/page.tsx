import { fetchArticlesWithCategories, getAllArticles } from "@/lib/api";
import Article from "@/components/articles/articles";
import { ArticleExtended } from "@/types/types";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import ArticlesSkeleton from "@/components/articles/ArticlesSkeleton";
import EmptyArticles from "@/components/articles/EmptyArticles";

export const metadata: Metadata = {
  title: "Jeff Mitini | Articles",
  description:
    "Articles about Business Intelligence, Data Analytics and Leadership by Jeff Mitini",
};

export default async function ArticlesPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams.page as string) || 1;
  const pageSize = parseInt(searchParams.pageSize as string) || 10;
  const category = searchParams.category;
  const getArticles = unstable_cache(
    async () => {
      return category
        ? await fetchArticlesWithCategories(page, pageSize, category as string)
        : await getAllArticles(page);
    },
    ["articles"],
    { revalidate: 3600, tags: ["articles"] }
  );
  const result = await getArticles();

  return (
    <Suspense fallback={<ArticlesSkeleton />}>
      {result?.articles.length > 0 ? (
        <Article
          featuredArticle={result.articles[0]}
          regularArticles={result.articles}
        />
      ) : (
        <EmptyArticles />
      )}
    </Suspense>
  );
}
