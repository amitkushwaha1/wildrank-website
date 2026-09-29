import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toronto SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Toronto, ON. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/toronto-seo-company" },
};

export default function Page() {
  return <LocationPage city="Toronto" state="ON" />;
}
