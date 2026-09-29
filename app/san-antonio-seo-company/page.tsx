import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Antonio SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in San Antonio, TX. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/san-antonio-seo-company" },
};

export default function Page() {
  return <LocationPage city="San Antonio" state="TX" />;
}
