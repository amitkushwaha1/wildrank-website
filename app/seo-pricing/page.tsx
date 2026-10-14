import type { Metadata } from "next";
import SeoPricingClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "SEO Firm Pricing | Wildrank Technologies",
  description: "Wildrank SEO firm pricing: Basic, Silver, Gold and Premium plans from $499/month. Every plan includes GEO and AEO strategy. Free audit and consultation.",
  alternates: { canonical: "/seo-pricing" },
};

export default function Page() {
  return <SeoPricingClient />;
}
