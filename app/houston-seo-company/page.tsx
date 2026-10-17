import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houston SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Houston, TX — technical SEO, local search and AI search visibility (GEO/AEO) for Houston businesses. Get a free audit.",
  alternates: { canonical: "/houston-seo-company" },
};


export default function Page() {
  return <LocationPage city="Houston" state="TX" />;
}
