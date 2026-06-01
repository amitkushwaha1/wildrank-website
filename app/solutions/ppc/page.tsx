import PPCHero from "@/components/solutions/ppc/PPCHero";
import PPCServices from "@/components/solutions/ppc/PPCServices";
import PPCProcess from "@/components/solutions/ppc/PPCProcess";
import PPCResults from "@/components/solutions/ppc/PPCResults";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Advertising Services | Wildrank Technologies",
  description: "Data-driven PPC campaigns on Google, Bing & social platforms. Maximize ROI with expert pay-per-click management.",
};

export default function PPCPage() {
  return (
    <>
      <PPCHero />
      <PPCServices />
      <PPCProcess />
      <PPCResults />
      <CTA />
    </>
  );
}
