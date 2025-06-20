import { authors } from "@/shared/articles";
import React from "react";
import { AuthorProfile } from "../author-profile";
import { CategoryList } from "../category-list";
import { FeaturedArticle } from "../featured-article";
import { Newsletter } from "../newsletter";
import Image from "next/image";
import { ArticleExtended as Article } from "@/types/types";
import { ArticleCard } from "../article-card";
import Link from "next/link";

const ArticleComponent = ({
  featuredArticle,
  regularArticles,
}: {
  featuredArticle: Article;
  regularArticles: Article[];
}) => {
  const slicedArticles = regularArticles.slice(1);
  return (
    <div className="container mx-auto px-4">
      <section className="mb-16">
        <FeaturedArticle article={featuredArticle} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slicedArticles.length > 0 ? (
              slicedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <p>No articles found</p>
            )}
          </div>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularArticles.slice(0, 4).map((article) => (
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
