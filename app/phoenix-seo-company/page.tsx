import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Phoenix, AZ. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/phoenix-seo-company" },
};

export default function Page() {
  return <LocationPage city="Phoenix" state="AZ" />;
}
