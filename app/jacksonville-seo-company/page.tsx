import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Jacksonville, FL — technical SEO, local search and AI search visibility (GEO/AEO) for Jacksonville businesses. Get a free audit.",
  alternates: { canonical: "/jacksonville-seo-company" },
};


export default function Page() {
  return <LocationPage city="Jacksonville" state="FL" />;
}
