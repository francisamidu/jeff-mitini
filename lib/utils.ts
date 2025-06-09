import { Article, ArticleExtended } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sluggify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function transformArticle(article: Article): ArticleExtended {
  return {
    author: {
      id: article.author.id,
      bio: article.author.bio,
      name: article.author.name,
      email: article.author.email,
      avatar: article.author.avatar || { url: "/jeff.jpg" },
    },
    content: article.content,
    createdAt: article.createdAt,
    publishedAt: article.publishedAt,
    description: article.description,
    id: article.id,
    title: article.title,
    slug: article.slug,
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
  };
}

const emailSchema = z.string().email();

export const validateEmail = (email: string) => {
  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
};
