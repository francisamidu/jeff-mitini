import articles, { authors } from "@/shared/articles";
import { Link, ArrowRight, Clock } from "lucide-react";
import React from "react";
import { AuthorProfile } from "../author-profile";
import { CategoryList } from "../category-list";
import { FeaturedArticle } from "../featured-article";
import { Newsletter } from "../newsletter";
import { ShowMoreButton } from "../show-more-button";
import Image from "next/image";
import { ArticleExtended as Article } from "@/types/types";

const ArticleComponent = ({
  tempFeaturedArticle = articles[0],
  tempRegularArticles = articles.slice(1),
}: {
  tempFeaturedArticle: Article;
  tempRegularArticles: Article[];
}) => {
  const featuredArticle = tempFeaturedArticle?.id
    ? tempFeaturedArticle
    : articles[0];
  const regularArticles =
    tempRegularArticles?.length > 0 ? tempRegularArticles : articles.slice(1);

  return (
    <div className="container mx-auto px-4">
      <section className="mb-16">
        <FeaturedArticle article={featuredArticle} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div> */}

          <ShowMoreButton initialArticles={regularArticles} currentPage={1} />
        </div>

        <div className="lg:col-span-1">
          <AuthorProfile author={authors[0]} />

          <div className="mt-12">
            <CategoryList articles={regularArticles} />
          </div>

          <div className="mt-12">
            <Newsletter />
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <Link
            href="/latest-articles"
            className="text-foreground hover:text-secondary flex items-center gap-1"
          >
            View More <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.slice(0, 4).map((article) => (
            <div key={article.id} className="group">
              <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
                <Image
                  src={
                    article.coverImage?.url ||
                    "/placeholder.svg?height=200&width=300&query=colorful gradient"
                  }
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="uppercase font-medium text-foreground">
                  {article.categories[0].name}
                </span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{article.readTime || "4 min read"}</span>
                </div>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-secondary transition-colors">
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleComponent;
