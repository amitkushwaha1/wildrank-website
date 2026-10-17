import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Phoenix, AZ — technical SEO, local search and AI search visibility (GEO/AEO) for Phoenix businesses. Get a free audit.",
  alternates: { canonical: "/phoenix-seo-company" },
};


export default function Page() {
  return <LocationPage city="Phoenix" state="AZ" />;
}
