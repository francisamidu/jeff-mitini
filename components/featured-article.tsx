import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ArticleExtended } from "@/types/types";

interface FeaturedArticleProps {
  article: ArticleExtended;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  console.log(article);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <Image
          src={
            article.coverImage?.url ||
            "/placeholder.svg?height=400&width=600&query=colorful gradient sphere"
          }
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span className="uppercase font-medium text-secondary">
            {article.categories[0].name}
          </span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{article.readTime || "4 min read"}</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          <Link
            href={`/articles/${article.slug}`}
            className="hover:text-secondary transition-colors"
          >
            {article.title}
          </Link>
        </h1>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image
              src={article.author?.avatar?.url || "/jeff.jpg"}
              alt={article.author?.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm text-gray-600">{article.author.name}</span>
          <span className="text-sm text-gray-500">
            {new Date(
              article.publishedAt || article.createdAt
            ).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <Button
          asChild
          className="group bg-foreground rounded-none hover:bg-foreground/90 w-fit"
        >
          <Link href={`/articles/${article.slug}`}>
            Read Article
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={16}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
}
