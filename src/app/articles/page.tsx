import Link from "next/link";
import { getAllArticles } from "@/lib/markdown";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div key={article.slug} className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900">
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </h2>
            <p className="text-sm text-gray-500 mt-1">{article.date}</p>
            {article.summary && <p className="mt-2 text-gray-700">{article.summary}</p>}

            {/* Display Tags */}
            {article.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Link href={`/articles/${article.slug}`} className="inline-block mt-3 text-blue-600 hover:underline font-medium">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
