import type { Metadata } from "next";
import SeoPricingClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "SEO Pricing - Plans From $499/month | Wildrank Technologies",
  description: "Transparent SEO pricing: Basic, Silver, Gold and Premium plans from $499 per month. Every plan includes G.E.O and A.E.O strategy.",
  alternates: { canonical: "/seo-pricing" },
};

export default function Page() {
  return <SeoPricingClient />;
}
