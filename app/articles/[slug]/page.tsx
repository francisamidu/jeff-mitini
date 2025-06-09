import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getArticleBySlug } from "@/lib/api";
import { CommentForm } from "@/components/comment-form";
import { Newsletter } from "@/components/newsletter";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Article from "@/components/articles/article";
import { ArticleCard } from "@/components/article-card";
import ArticleSkeleton from "@/components/articles/ArticleSkeleton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return {
    title: `${article.title} | Jeff Mitini`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const paramsData = await params;
  const article = await getArticleBySlug(paramsData.slug);

  const { articles } = await getAllArticles();

  return (
    <main>
      <Suspense fallback={<ArticleSkeleton />}>
        <div className="grid grid-cols-4 gap-8 px-4">
          <Article article={article} articles={articles} />
          <div className="grid grid-cols-1 gap-8 max-h-[calc(100vh-20rem)] overflow-y-auto scroll-mr-10">
            {articles.length > 0 ? (
              articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <p>No articles found</p>
            )}
          </div>
        </div>
      </Suspense>
    </main>
  );
}
