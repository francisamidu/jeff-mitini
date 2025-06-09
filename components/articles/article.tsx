import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import parse from "html-react-parser";
import { ArticleExtended } from "@/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/newsletter";
import { sluggify } from "@/lib/utils";

const Article = ({
  article,
  articles,
}: {
  article: ArticleExtended;
  articles: ArticleExtended[];
}) => {
  const articleIndex = articles.findIndex((a) => a.id === article.id);
  const prevArticle = articles[articleIndex - 1];
  const nextArticle = articles[articleIndex + 1];
  console.log(parse(article.content));
  return (
    <div className="pl-4 col-span-3 my-3">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        <div className="mb-6">
          <div className="flex items-center gap-8 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={article.author.avatar.url || "/jeff.jpg"}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>
                    {new Date(
                      article.publishedAt || article.createdAt
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
            {article.categories.length > 0 && (
              <Link
                href={`/articles/?category=${sluggify(
                  article.categories[0].name
                )}`}
                className="uppercase font-medium text-secondary bg-foreground/10 px-2 py-1 rounded"
              >
                {article.categories[0].name}
              </Link>
            )}
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{article.readTime || "4 min read"}</span>
            </div>
          </div>
        </div>

        {article.coverImage && (
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.coverImage.url}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="flex justify-between mt-12 pt-6 border-t">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link
              href={`/articles/${nextArticle.slug}`}
              className="flex items-center gap-2"
            >
              Next Article
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-20 py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            You might also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {article.recentPosts?.slice(0, 3).map((post) => (
              <div key={post.id} className="group">
                <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-bold mb-2 group-hover:text-purple-700 transition-colors">
                  <Link href={`/articles/${post.slug}`}>{post.title}</Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default Article;
