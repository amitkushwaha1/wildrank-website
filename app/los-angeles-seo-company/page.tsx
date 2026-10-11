import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles SEO Company - Wildrank Technologies",
  description: "Stand out in a crowded market. Our Los Angeles SEO company drives organic growth for ecommerce, lifestyle and local brands. Request a free audit.",
  alternates: { canonical: "/los-angeles-seo-company" },
};

export default function Page() {
  return <LocationPage city="Los Angeles" state="CA" />;
}
