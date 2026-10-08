import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New York SEO Company - Wildrank Technologies",
  description: "New York SEO company for finance, ecommerce and B2B brands. AI-powered SEO, content and link building built to scale. Get a free SEO audit.",
  alternates: { canonical: "/new-york-seo-company" },
};

export default function Page() {
  return <LocationPage city="New York" state="NY" />;
}
