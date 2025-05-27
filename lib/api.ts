// lib/api.ts
import ky from 'ky';
import {
  UserArticleData,
  Article,
  Category,
  StrapiListResponse,
  StrapiSingleResponse,
  ArticleExtended,
} from "../types/types";



export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_URL,
});

export const getAllPosts = async (
  page: number = 1,
  searchQuery: string = ""
): Promise<{ posts: Article[]; pagination: StrapiListResponse<Article>["meta"]["pagination"] }> => {
  try {
    // If search query exists, filter posts based on title
    const searchFilter = searchQuery
      ? `&filters[title][$containsi]=${searchQuery}`
      : ""; // Search filter with the title
    // Fetch posts with pagination and populate the required fields
    const response = await api.get(
      `api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_LIMIT}${searchFilter}`
    ).json<StrapiListResponse<Article>>();
    return {
      posts: response.data,
      pagination: response.meta.pagination, // Return data and include pagination data
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Server error"); // Error handling
  }
};

// Get post by slug
export const getPostBySlug = async (slug: string): Promise<Article> => {
  try {
    const response = await api.get(
      `api/blogs?filters[slug]=${slug}&populate=*`
    ).json<StrapiListResponse<Article>>(); // Fetch a single blog post using the slug parameter
    if (response.data.length > 0) {
      // If post exists
      return response.data[0]; // Return the post data
    }
    throw new Error("Post not found.");
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Server error");
  }
};

// Get all posts categories
export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get("api/categories").json<StrapiListResponse<Category>>(); // Route to fetch Categories data
    return response.data; // Return all categories
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

    const response = await api.post("api/upload", { body: formData }).json<any[]>(); // Strapi route to upload files and images
    const uploadedImage = response[0];
    return uploadedImage; // Return full image metadata
  } catch (err) {
    console.error("Error uploading image:", err);
    throw err;
  }
};

// Create a blog post and handle all fields
export const createPost = async (postData: UserArticleData): Promise<Article> => {
  try {
    const reqData = { data: { ...postData } }; // Strapi required format to post data
    const response = await api.post("api/blogs", { json: reqData }).json<StrapiSingleResponse<Article>>();
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
};

// Fetch more articles for pagination/infinite scroll
export const fetchMoreArticles = async (
  page: number = 1,
  pageSize: number = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 6
): Promise<{ articles: ArticleExtended[]; pagination: StrapiListResponse<Article>["meta"]["pagination"] }> => {
  try {
    const response = await api.get(
      `api/blogs?populate=author,categories,coverImage&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    ).json<StrapiListResponse<Article>>();
    return {
      articles: response.data as ArticleExtended[],
      pagination: response.meta.pagination,
    };
  } catch (error) {
    console.error("Error fetching more articles:", error);
    throw new Error("Failed to fetch more articles");
  }
};