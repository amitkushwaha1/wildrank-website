import SEOHero from "@/components/seo/SEOHero";
import SEOPricingPlans from "@/components/seo/SEOPricingPlans";
import SEOProcess from "@/components/seo/SEOProcess";
import SEOWhyUs from "@/components/seo/SEOWhyUs";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEOStats from "@/components/seo/SEOStats";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Pricing Plans | Wildrank Technologies",
  description:
    "Transparent SEO pricing plans — Silver, Gold, Platinum, Diamond. Full-service SEO including on-page, off-page, technical, local, and AEO optimization.",
};

export default function SEOPricingPage() {
  return (
    <>
      <SEOHero />
      <SEOStats />
      <SEOPricingPlans />
      <SEOProcess />
      <SEOWhyUs />
      <SEOFAQ />
      <CTA />
    </>
  );
}
