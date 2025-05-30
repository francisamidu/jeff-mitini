import Link from "next/link";
import { ArticleExtended } from "@/types/types";

export function CategoryList({ articles }: { articles: ArticleExtended[] }) {
  console.log(articles);
  const tempCategories = articles.reduce((acc, article) => {
    article.categories.forEach((category) => {
      if (!acc[category.name]) {
        acc[category.name] = 1;
      } else {
        acc[category.name]++;
      }
    });
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(tempCategories).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name} className="flex justify-between items-center">
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              {category.name}
            </Link>
            <span className="text-sm text-gray-500">({category.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
