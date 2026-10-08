import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charlotte SEO Company - Wildrank Technologies",
  description: "Need more organic leads in Charlotte? Wildrank's AI-powered SEO, content and link building help finance and B2B brands grow. Get a free audit.",
  alternates: { canonical: "/charlotte-seo-company" },
};

export default function Page() {
  return <LocationPage city="Charlotte" state="NC" />;
}
