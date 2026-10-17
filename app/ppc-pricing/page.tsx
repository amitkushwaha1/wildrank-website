import type { Metadata } from "next";
import PpcPricingClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "PPC Pricing - Plans For Every Budget | WildRank",
  description: "Straightforward PPC pricing across Basic, Silver, Gold and Premium tiers. Transparent reporting on spend, conversions and ROAS.",
  alternates: { canonical: "/ppc-pricing" },
};

export default function Page() {
  return <PpcPricingClient />;
}
