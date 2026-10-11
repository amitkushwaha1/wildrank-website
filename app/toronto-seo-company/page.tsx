import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toronto SEO Company - Wildrank Technologies",
  description: "Toronto SEO company for Canadian B2B, ecommerce and local brands. AI-powered SEO to rank on Google and AI platforms. Get a free audit.",
  alternates: { canonical: "/toronto-seo-company" },
};

export default function Page() {
  return <LocationPage city="Toronto" state="ON" />;
}
