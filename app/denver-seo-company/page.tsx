import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denver SEO Firm | Wildrank Technologies",
  description:
    "Denver, CO: Wildrank is an SEO firm for Denver businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/denver-seo-company" },
};


export default function Page() {
  return <LocationPage city="Denver" state="CO" />;
}
