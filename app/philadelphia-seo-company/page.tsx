import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philadelphia SEO Company - Wildrank Technologies",
  description: "Philadelphia SEO company supporting healthcare, education and local businesses with proven SEO and local search strategies. Get a free audit.",
  alternates: { canonical: "/philadelphia-seo-company" },
};

export default function Page() {
  return <LocationPage city="Philadelphia" state="PA" />;
}
