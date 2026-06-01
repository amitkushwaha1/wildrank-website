import SEOServicesHero from "@/components/solutions/seo/SEOServicesHero";
import SEOServicesWhat from "@/components/solutions/seo/SEOServicesWhat";
import SEOServicesProcess from "@/components/solutions/seo/SEOServicesProcess";
import SEOServicesResults from "@/components/solutions/seo/SEOServicesResults";
import SEOServicesWhyUs from "@/components/solutions/seo/SEOServicesWhyUs";
import SEOSFAQ from "@/components/solutions/seo/SEOSFAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | Wildrank Technologies",
  description: "AI-powered SEO services that drive organic traffic, improve rankings, and grow revenue. Technical SEO, link building, content strategy and more.",
};

export default function SEOServicesPage() {
  return (
    <>
      <SEOServicesHero />
      <SEOServicesWhat />
      <SEOServicesProcess />
      <SEOServicesResults />
      <SEOServicesWhyUs />
      <SEOSFAQ />
      <CTA />
    </>
  );
}
