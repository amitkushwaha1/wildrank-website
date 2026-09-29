import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charlotte SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Charlotte, NC. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/charlotte-seo-company" },
};

export default function Page() {
  return <LocationPage city="Charlotte" state="NC" />;
}
