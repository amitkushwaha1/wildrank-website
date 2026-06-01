import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Wildrank Technologies",
  description: "Digital marketing insights, SEO tips, and industry news from the Wildrank Technologies team.",
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
