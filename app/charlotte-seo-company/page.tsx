import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charlotte SEO Company | AI Search | Wildrank Technologies",
  description: "SEO company in Charlotte, NC — technical SEO, local search and AI search visibility (GEO/AEO) for Charlotte businesses. Get a free audit.",
  alternates: { canonical: "/charlotte-seo-company" },
};


export default function Page() {
  return <LocationPage city="Charlotte" state="NC" />;
}
