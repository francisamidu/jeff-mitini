import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EmptyArticles({
  searchTerm = "",
  onClearSearch,
  onCreateArticle,
}: {
  searchTerm?: string;
  onClearSearch?: () => void;
  onCreateArticle?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-8">
        <Image
          src="/file.svg"
          alt="No articles illustration"
          width={96}
          height={96}
          className="mx-auto mb-4 opacity-80"
        />
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
          No articles found
        </h2>
        <p className="text-muted-foreground mb-6">
          {searchTerm
            ? `"${searchTerm}" did not match any articles. Please try again or create a new article.`
            : "There are no articles yet. Start by creating a new article."}
        </p>
      </div>
    </div>
  );
}
