import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philadelphia SEO Company | Wildrank Technologies",
  description:
    "Philadelphia, PA: Wildrank is an SEO company for Philadelphia businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/philadelphia-seo-company" },
};


export default function Page() {
  return <LocationPage city="Philadelphia" state="PA" />;
}
