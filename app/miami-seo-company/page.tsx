import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miami SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Miami, FL — technical SEO, local search and AI search visibility (GEO/AEO) for Miami businesses. Get a free audit.",
  alternates: { canonical: "/miami-seo-company" },
};


export default function Page() {
  return <LocationPage city="Miami" state="FL" />;
}
