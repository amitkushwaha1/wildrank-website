import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dallas SEO Company | Wildrank Technologies",
  description:
    "Dallas, TX: Wildrank is an SEO company for Dallas businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/dallas-seo-company" },
};


export default function Page() {
  return <LocationPage city="Dallas" state="TX" />;
}
