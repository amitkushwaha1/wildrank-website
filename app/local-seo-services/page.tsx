import type { Metadata } from "next";
import LocalSeoServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "SEO Firm Services | Wildrank Technologies",
  description: "Wildrank SEO firm services: Local SEO, Technical SEO, Content Marketing, AI Search Optimization. Free audit and consultation for new clients.",
  alternates: { canonical: "/local-seo-services" },
};

export default function Page() {
  return <LocalSeoServicesClient />;
}
