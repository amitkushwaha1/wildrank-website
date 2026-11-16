import type { Metadata } from "next";
import FaqClient from "./client";
import { FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ — Digital Marketing, SEO, PPC & AI Search Questions | Wildrank Technologies",
  description:
    "Answers to 130+ questions about SEO, digital marketing, PPC, social media, AI search (GEO/AEO), white label services, web development, and agency pricing. Written to be cited by search engines and AI assistants.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer + (f.detail ? " " + f.detail : ""),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}