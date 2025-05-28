// lib/types.ts
// export Interface for Image Data
export interface ImageData {
    url: string;
  }
  
  // export Interface for Author Data
  export interface Author {
    id: number; // Assuming each author has a unique ID
    name: string;
    email: string;
    avatar: ImageData; // Assuming the author has
  }
  
  // export Interface for Category Data
  export interface Category {
    name: string;
  }
  
  export interface Article {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string; // rich markdown text
    createdAt: string; // ISO date string
    coverImage: ImageData; // Assuming this is the structure of your featured image
    author: Author; // The author of the blog post
    categories: Category[]; // An array of categories associated with the post
    recentPosts?: Article[];
    publishedAt: string;
  }

  export interface CommentData {
    name: string
    email: string
    website?: string
    comment: string
  }

  export interface ArticleExtended extends Article {
    readTime: string;
    publishedAt: string;
  }
  
  export interface UserArticleData {
    title: string;
    slug: string;
    description: string;
    content: string; //  rich markdown text
  }
  
  // Example response structure when fetching posts
  export interface ArticleResponse {
    data: Article[];
  }
  
  // Example response structure when fetching a single post
  export interface SingleArticleResponse {
    data: Article; // The single blog post object
  }

  // Generic Strapi response type
export interface StrapiListResponse<T> {
    data: T[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
  export interface StrapiSingleResponse<T> {
    data: T;
    meta?: unknown;
  }