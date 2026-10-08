import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Diego SEO Company - Wildrank Technologies",
  description: "Boost visibility for San Diego tourism, wellness and local businesses with AI-powered SEO and local search. Get a free website and SEO audit.",
  alternates: { canonical: "/san-diego-seo-company" },
};

export default function Page() {
  return <LocationPage city="San Diego" state="CA" />;
}
