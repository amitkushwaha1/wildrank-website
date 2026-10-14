import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville SEO Company | Wildrank Technologies",
  description:
    "Jacksonville, FL: Wildrank is an SEO company for Jacksonville businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/jacksonville-seo-company" },
};


export default function Page() {
  return <LocationPage city="Jacksonville" state="FL" />;
}
