import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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
      tags: data.tags || []
    };
  });
}

export async function getArticle(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  return {
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags || [],
    contentHtml: processedContent.toString()
  };
}
