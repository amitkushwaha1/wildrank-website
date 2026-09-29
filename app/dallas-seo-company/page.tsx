import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dallas SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Dallas, TX. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/dallas-seo-company" },
};

export default function Page() {
  return <LocationPage city="Dallas" state="TX" />;
}
