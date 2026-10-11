import type { Metadata } from "next";
import LocalSeoServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Local SEO Services | Wildrank Technologies",
  description: "Get found by customers nearby. Google Business Profile, local citations and map-pack visibility for multi-location and single-site businesses.",
  alternates: { canonical: "/local-seo-services" },
};

export default function Page() {
  return <LocalSeoServicesClient />;
}
