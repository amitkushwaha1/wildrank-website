import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Seattle, WA — technical SEO, local search and AI search visibility (GEO/AEO) for Seattle businesses. Get a free audit.",
  alternates: { canonical: "/seattle-seo-company" },
};


export default function Page() {
  return <LocationPage city="Seattle" state="WA" />;
}
