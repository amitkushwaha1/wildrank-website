import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix SEO Company | Wildrank Technologies",
  description:
    "Phoenix, AZ: Wildrank is an SEO company for Phoenix businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/phoenix-seo-company" },
};


export default function Page() {
  return <LocationPage city="Phoenix" state="AZ" />;
}
