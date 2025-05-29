import { ArticleExtended, ArticleResponse } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "react-slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformArticle(
  articleResponse: ArticleResponse
): ArticleExtended[] {
  return articleResponse.map((article) => ({
    author: {
      id: article.author.id,
      bio: article.author.bio,
      name: article.author.name,
      email: article.author.email,
      avatar: article.author.avatar,
    },
    content: article.content,
    createdAt: article.createdAt,
    publishedAt: article.publishedAt,
    description: article.description,
    id: article.id,
    title: article.title,
    slug: sluggify(article.title),
    coverImage: article.coverImage || {
      url: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    readTime: `${Math.ceil(
      article.content.trim().split(/\s+/).length / 200
    )} min read`,
    categories: article.categories.map((category) => ({
      name: category.name,
      id: category.id,
    })),
  }));
}

export function sluggify(str: string) {
  return slugify(str);
}
