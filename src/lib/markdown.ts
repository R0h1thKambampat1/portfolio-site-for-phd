import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkMath from "remark-math"; // Add support for LaTeX syntax
import remarkRehype from "remark-rehype"; // Convert Markdown AST to HTML AST
import rehypeKatex from "rehype-katex"; // Render LaTeX equations with KaTeX
import rehypeStringify from "rehype-stringify"; // Convert to HTML string

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export function getAllArticles() {
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames.map(filename => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: (data.tags as string[]) || []
    };
  });
}

export async function getArticle(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Process Markdown with equations and convert to HTML
  const processedContent = await remark()
    .use(remarkMath) // Parse LaTeX equations
    .use(remarkRehype) // Convert Markdown to HTML AST
    .use(rehypeKatex, {
      throwOnError: false,
      strict: false,
      displayMode: false // make sure inline stays inline
    }) // Render equations with KaTeX
    .use(rehypeStringify) // Output as HTML string
    .process(content);

  return {
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags || [],
    contentHtml: processedContent.toString()
  };
}
