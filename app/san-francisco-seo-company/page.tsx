import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Francisco SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in San Francisco, CA. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/san-francisco-seo-company" },
};

export default function Page() {
  return <LocationPage city="San Francisco" state="CA" />;
}
