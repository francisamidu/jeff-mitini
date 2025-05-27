"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { fetchMoreArticles } from "@/lib/api";
import type { ArticleExtended as Article } from "@/types/types";
import { ArticleCard } from "@/components/article-card";

interface ShowMoreButtonProps {
  initialArticles: Article[];
  currentPage: number;
}

export function ShowMoreButton({
  initialArticles,
  currentPage,
}: ShowMoreButtonProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [page, setPage] = useState(currentPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const moreArticles = await fetchMoreArticles(nextPage);

      if (moreArticles.articles.length === 0) {
        setHasMore(false);
      } else {
        setArticles([...articles, ...moreArticles.articles]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error loading more articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Show More"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
