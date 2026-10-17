import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toronto SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Toronto, ON — technical SEO, local search and AI search visibility (GEO/AEO) for Toronto businesses. Get a free audit.",
  alternates: { canonical: "/toronto-seo-company" },
};


export default function Page() {
  return <LocationPage city="Toronto" state="ON" />;
}
