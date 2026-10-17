import type { Metadata } from "next";
import PpcServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "PPC Management Services | WildRank",
  description: "Pay-per-click managed for profit, not clicks. Google and Meta campaigns with continuous A/B testing and transparent spend reporting.",
  alternates: { canonical: "/ppc-services" },
};

export default function Page() {
  return <PpcServicesClient />;
}
