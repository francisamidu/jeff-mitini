import Link from "next/link";
import Image from "next/image";
import { Clock, Tag } from "lucide-react";
import type { ArticleExtended } from "@/types/types";

interface ArticleCardProps {
  article: ArticleExtended;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group">
      <div className="relative h-56 mb-4 overflow-hidden rounded-lg">
        <Image
          src={
            article.coverImage?.url ||
            `/placeholder.svg?height=300&width=500&query=colorful gradient ${article.id}`
          }
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex justify-between items-center gap-2 text-xs text-gray-500 mb-2">
        <span className="uppercase font-medium text-secondary flex items-center gap-1">
          <Tag size={14} />
          {article.categories[0].name}
        </span>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{article.readTime || "3 min read"}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6 rounded-full overflow-hidden">
            <Image
              src={article.author.avatar.url || "/images/bree-mukami.jpg"}
              alt={article.author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs text-gray-600">{article.author.name}</span>
        </div>
        <span className="text-xs text-gray-500">
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
