import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin SEO Company | SEO & AI Search | Wildrank Technologies",
  description: "SEO company in Austin, TX — technical SEO, local search and AI search visibility (GEO/AEO) for Austin businesses. Get a free audit.",
  alternates: { canonical: "/austin-seo-company" },
};


export default function Page() {
  return <LocationPage city="Austin" state="TX" />;
}
