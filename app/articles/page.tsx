import { fetchMoreArticles, getHello } from "@/lib/api";
import Article from "@/components/articles/article";
import { ArticleExtended } from "@/types/types";
import { Metadata } from "next";
import { Suspense } from "react";

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
  const { articles } = await fetchMoreArticles(page, pageSize);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Article
        featuredArticle={articles[0]}
        regularArticles={articles.slice(1)}
      />
    </Suspense>
  );
}
