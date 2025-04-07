import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohith Kambampati",
  description: "Portfolio and research articles"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <header className="p-6 border-b mb-6">
          <nav className="space-x-6 text-lg font-semibold">
            <Link href="/">Home</Link>
            <Link href="/articles">Articles</Link>
          </nav>
        </header>
        <main className="px-6">{children}</main>
      </body>
    </html>
  );
}
