import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston SEO Company | SEO & AI Search | Wildrank Technologies",
  description: "SEO company in Boston, MA — technical SEO, local search and AI search visibility (GEO/AEO) for Boston businesses. Get a free audit.",
  alternates: { canonical: "/boston-seo-company" },
};


export default function Page() {
  return <LocationPage city="Boston" state="MA" />;
}
