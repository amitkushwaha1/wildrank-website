import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Marketing Guides & Insights | Wildrank Technologies",
  description:
    "Browse the topics our team works in — SEO, local search, paid media, content, social, AI search and white label growth — and how we approach each one.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <CTA />
    </>
  );
}
