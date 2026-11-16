import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqCategoryClient from "./client";
import { FAQ_CATEGORIES, getFaqByCategory, type FaqCategory } from "@/data/faqs";

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return FAQ_CATEGORIES.map((cat) => ({
    category: cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = FAQ_CATEGORIES.find(
    (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "") === params.category
  );
  if (!categoryName) return {};
  return {
    title: `${categoryName} FAQ — Questions & Answers | Wildrank Technologies`,
    description: `Answers to common questions about ${categoryName?.toLowerCase()}. ${getFaqByCategory(categoryName as FaqCategory).length} questions answered. Written to be cited by AI assistants.`,
    alternates: { canonical: `/faq/${params.category}` },
  };
}

export default function FaqCategoryPage({ params }: Props) {
  const categoryName = FAQ_CATEGORIES.find(
    (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "") === params.category
  );
  if (!categoryName) notFound();

  const faqs = getFaqByCategory(categoryName as FaqCategory);
  if (faqs.length === 0) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer + (f.detail ? " " + f.detail : ""),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqCategoryClient category={categoryName as FaqCategory} faqs={faqs} />
    </>
  );
}
