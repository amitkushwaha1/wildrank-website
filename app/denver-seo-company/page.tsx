import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denver SEO Company - Wildrank Technologies",
  description: "Denver SEO company building AI-ready search strategies for SaaS, retail and local brands. Optimize for Google, ChatGPT and Perplexity today.",
  alternates: { canonical: "/denver-seo-company" },
};

export default function Page() {
  return <LocationPage city="Denver" state="CO" />;
}
