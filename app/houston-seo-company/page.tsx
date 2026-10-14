import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houston SEO Firm | Wildrank Technologies",
  description:
    "Houston, TX: Wildrank is an SEO firm for Houston businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/houston-seo-company" },
};


export default function Page() {
  return <LocationPage city="Houston" state="TX" />;
}
