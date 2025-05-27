import Link from "next/link"
import Image from "next/image"
import { fetchArticleBySlug, fetchArticles } from "@/lib/api"
import { CommentForm } from "@/components/comment-form"
import { Newsletter } from "@/components/newsletter"
import { notFound } from "next/navigation"
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  const articles = await fetchArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await fetchArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto mb-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="uppercase font-medium text-purple-600">{article.category}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{article.readTime || "4 min read"}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={article.author.avatar || "/images/bree-mukami.jpg"}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{article.author.name}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar size={14} />
                <span>
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {article.coverImage && (
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.coverImage.url || "/placeholder.svg?height=400&width=800&query=colorful gradient"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="flex justify-between mt-12 pt-6 border-t">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/latest-articles" className="flex items-center gap-2">
              More Articles
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
        <CommentForm articleId={article.id} />
      </div>

      <div className="mt-20 py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {article.recentPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group">
                <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&query=colorful gradient ${post.id}`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="uppercase font-medium text-purple-600">Article</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-purple-700 transition-colors">
                  <Link href={`/articles/${post.slug}`}>{post.title}</Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  )
}
