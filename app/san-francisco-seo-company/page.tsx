import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Francisco SEO Company - Wildrank Technologies",
  description: "San Francisco SEO company for SaaS, startups and tech brands. Scale organic traffic with technical SEO, content and GEO. Book a strategy session.",
  alternates: { canonical: "/san-francisco-seo-company" },
};

export default function Page() {
  return <LocationPage city="San Francisco" state="CA" />;
}
