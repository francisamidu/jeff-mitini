import ky from "ky";
import strapiClient from "@/api/api";
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

export const getAllPosts = async (
  page: number = 1,
  searchQuery: string = ""
): Promise<{
  posts: Article[];
  pagination: StrapiListResponse<Article>["meta"]["pagination"];
}> => {
  try {
    const filters = searchQuery
      ? { title: { $containsi: searchQuery } }
      : undefined;
    const response = await strapiClient.collection("articles").find({
      populate: ["author", "categories", "coverImage"],
      pagination: {
        page,
        pageSize: Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 6,
      },
      filters,
    });
    const posts = (response.data ?? []).map(
      (post) => post as unknown as Article
    );
    const pagination = response.meta?.pagination ?? {
      page: 1,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    };
    return {
      posts,
      pagination,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};

// Test
export const getHello = async () => {
  try {
    const response = await strapiClient.fetch("articles/hello");
    return response.json();
  } catch (error) {
    console.error("Error fetching hello:", error);
    throw new Error("Failed to fetch hello");
  }
};

// Get post by slug
export const getPostBySlug = async (slug: string): Promise<Article> => {
  try {
    const response = await strapiClient.collection("articles").find({
      populate: ["author", "categories", "coverImage"],
      filters: { slug: { $eq: slug } },
    });
    const posts = (response.data ?? []) as unknown as Article[];
    if (posts.length > 0) {
      return posts[0];
    } else {
      throw new Error("Post not found");
    }
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    throw new Error("Failed to fetch post by slug");
  }
};

// Get all posts categories
export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await strapiClient.collection("categories").find();
    return (response.data ?? []) as unknown as Category[]; // Return all categories
  } catch (error) {
    console.error("Error fetching post:", error);
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
    const response = await strapiClient
      .collection("articles")
      .create({ data: postData });
    return response.data as unknown as Article;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
};

// Fetch more articles for pagination/infinite scroll
export const fetchMoreArticles = async (
  page: number = 1,
  pageSize: number = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 6
): Promise<{
  articles: ArticleExtended[];
  pagination: StrapiListResponse<Article>["meta"]["pagination"];
}> => {
  try {
    const response = await strapiClient.collection("articles").find({
      populate: ["author", "categories", "coverImage"],
      pagination: { page, pageSize },
    });
    const pagination = response.meta?.pagination ?? {
      page: 1,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    };
    const articles = transformArticle(response as unknown as ArticleResponse);
    return {
      articles,
      pagination,
    };
  } catch (error) {
    console.error("Error fetching more articles:", error);
    throw new Error("Failed to fetch more articles");
  }
};
