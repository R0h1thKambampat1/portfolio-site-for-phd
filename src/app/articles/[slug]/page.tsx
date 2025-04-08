import { getArticle } from "@/lib/markdown";
import Link from "next/link";

// Define the type for the resolved params
type Params = {
  slug: string;
};

// Define the type for the article (must match the return type of getArticle)
type Article = {
  title: string;
  date: string;
  summary: string;
  tags: string[]; // Explicitly an array of strings
  contentHtml: string;
};

// Use a type that matches Next.js expectations: params is a Promise
type Props = {
  params: Promise<Params>;
};

export default async function ArticlePage({ params }: Props) {
  try {
    // Await the params Promise to get the slug
    const { slug } = await params;
    const article: Article = await getArticle(slug); // Explicitly type the article

    return (
      <main className="p-8 max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className="text-sm text-gray-500 mb-4">{article.date}</p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags?.length > 0 &&
              article.tags.map(tag => (
                <span key={tag} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-300 cursor-pointer">
                  {tag}
                </span>
              ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-gray-800">
          <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        </article>

        {/* Back to Articles Link */}
        <div className="mt-8">
          <Link href="/articles" className="text-blue-600 hover:underline font-medium">
            Back to Articles
          </Link>
        </div>
      </main>
    );
  } catch {
    return (
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600">Error loading article</h1>
        <p className="text-lg">Could not find the requested article.</p>
      </main>
    );
  }
}
