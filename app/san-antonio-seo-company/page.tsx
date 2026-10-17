import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Antonio SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in San Antonio, TX — technical SEO, local search and AI search visibility (GEO/AEO) for San Antonio businesses. Get a free audit.",
  alternates: { canonical: "/san-antonio-seo-company" },
};


export default function Page() {
  return <LocationPage city="San Antonio" state="TX" />;
}
