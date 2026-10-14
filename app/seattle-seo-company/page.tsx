import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle SEO Services | Wildrank Technologies",
  description:
    "Seattle, WA: Wildrank is an SEO services for Seattle businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/seattle-seo-company" },
};


export default function Page() {
  return <LocationPage city="Seattle" state="WA" />;
}
