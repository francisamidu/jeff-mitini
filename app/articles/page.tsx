import { fetchMoreArticles, getHello } from "@/lib/api";
import Article from "@/components/articles/article";
import { ArticleExtended } from "@/types/types";

export default async function ArticlesPage(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams.page as string) || 1;
  const pageSize = parseInt(searchParams.pageSize as string) || 10;

  const hello = await getHello();
  console.log(hello);
  // const { articles } = await fetchMoreArticles(page, pageSize);
  const articles: ArticleExtended[] = [];

  return (
    <main>
      <Article
        tempFeaturedArticle={articles[0]}
        tempRegularArticles={articles.slice(1)}
      />
    </main>
  );
}
