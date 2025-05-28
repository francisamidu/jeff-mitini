"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchMoreArticles } from "@/lib/api";
import { ArticleExtended } from "@/types/types";

interface ArticlesContextType {
  articles: ArticleExtended[];
  loading: boolean;
  fetchArticles: (page?: number, pageSize?: number) => Promise<void>;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<ArticleExtended[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchArticles = async (page: number = 1, pageSize?: number) => {
    setLoading(true);
    try {
      const { articles } = await fetchMoreArticles(page, pageSize);
      setArticles(articles);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, loading, fetchArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (context === undefined) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }
  return context;
};
