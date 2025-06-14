import { strapi } from "@strapi/client";
import ky from "ky";
import {
  UserArticleData,
  Article,
  Category,
  StrapiListResponse,
  ArticleExtended,
  ArticleResponse,
} from "../types/types";
import { transformArticle } from "./utils";

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_URL,
});

const client = strapi({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  auth: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
});

export const getAllArticles = async (
  page: number = 1,
  pageSize: number = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 6,
  searchQuery: string = ""
): Promise<{
  articles: ArticleExtended[];
  pagination: StrapiListResponse<Article>["meta"]["pagination"];
}> => {
  try {
    const filters = searchQuery
      ? { title: { $containsi: searchQuery } }
      : undefined;
    const response = await client.collection("articles").find({
      populate: ["author", "categories", "coverImage"],
      pagination: {
        page,
        pageSize,
      },
      filters,
    });
    const articles = (response.data ?? []).map((post) =>
      transformArticle(post as unknown as Article)
    );
    const pagination = response.meta?.pagination ?? {
      page: 1,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    };
    console.log(articles);
    return {
      articles,
      pagination,
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error("Failed to fetch articles");
  }
};

// Test
export const getHello = async () => {
  try {
    const response = await client.fetch("articles/hello");
    return response.json();
  } catch (error) {
    console.error("Error fetching hello:", error);
    throw new Error("Failed to fetch hello");
  }
};

// Get article by slug
export const getArticleBySlug = async (
  slug: string
): Promise<ArticleExtended> => {
  try {
    const response = await client.collection("articles").findOne(slug, {
      populate: ["author", "categories", "coverImage"],
      filters: { slug: { $eq: slug } },
    });
    const article = (response.data ?? {}) as unknown as Article;
    if (article) {
      return transformArticle(article);
    } else {
      throw new Error("Article not found");
    }
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    throw new Error("Failed to fetch article by slug");
  }
};

// Get all article categories
export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await client.collection("categories").find();
    return (response.data ?? []) as unknown as Category[]; // Return all categories
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Server error");
  }
};

// Upload image with correct structure for referencing in the blog
// You may want to define a type for the image upload response based on your Strapi config
export const uploadImage = async (image: File, refId: number): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "api::blog.blog"); // ref: Strapi content-type name (in this case 'blog')
    formData.append("refId", refId.toString()); // refId: Blog post ID
    formData.append("field", "cover"); // field: Image field name in the blog

    const response = await api
      .post("api/upload", { body: formData })
      .json<any[]>(); // Strapi route to upload files and images
    const uploadedImage = response[0];
    return uploadedImage; // Return full image metadata
  } catch (err) {
    console.error("Error uploading image:", err);
    throw err;
  }
};

// Create a blog post and handle all fields
export const createPost = async (
  postData: UserArticleData
): Promise<Article> => {
  try {
    const response = await client
      .collection("articles")
      .create({ data: postData });
    return response.data as unknown as Article;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
};

// Fetch articles with categories
export const fetchArticlesWithCategories = async (
  page: number = 1,
  pageSize: number = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 6,
  category: string
): Promise<{
  articles: ArticleExtended[];
  pagination: StrapiListResponse<Article>["meta"];
}> => {
  console.log("called with category");
  try {
    const response = await api.get("articles-with-category", {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
      searchParams: {
        page,
        pageSize,
        categories: category,
      },
    });
    const result: ArticleResponse = await response.json();
    const articles = result.data.map((article) =>
      transformArticle(article as unknown as Article)
    );
    return {
      articles,
      pagination: result.meta?.pagination || {
        page: 1,
        pageSize: 0,
        pageCount: 0,
        total: 0,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Subscribe to newsletter
export const subscribeToNewsletter = async (
  email: string,
  fullName: string
) => {
  try {
    const response = await ky.post("/api/newsletter-handler", {
      headers: {
        authorization: `Bearer ${process.env.NEXT_STRAPI_WEBHOOK_SECRET}`,
      },
      body: JSON.stringify({ email, fullName }),
    });
    return response.json();
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    throw error;
  }
};
