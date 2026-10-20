import BlogHero from "@/components/blog/BlogHero";
import ArticleList from "@/components/blog/ArticleList";
import BlogGrid from "@/components/blog/BlogGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Marketing Guides & Insights | Wildrank Technologies",
  description:
    "Practical guides on SEO, AI search visibility, local search and AI systems — written by the Wildrank Technologies team, with worked examples instead of invented statistics.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <ArticleList />
      <BlogGrid />
      <CTA />
    </>
  );
}
