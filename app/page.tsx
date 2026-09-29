import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in USA | SEO, Social Media, PPC, Web Design - Wildrank Technologies",
  description:
    "Wildrank Technologies is a digital marketing agency in the USA offering SEO, social media, PPC, web design, and growth-focused marketing solutions.",
};

// Lazy-load below-the-fold sections to reduce initial bundle
const AISection     = dynamic(() => import("@/components/home/AISection"),    { ssr: true });
const ServicesGrid  = dynamic(() => import("@/components/home/ServicesGrid"), { ssr: true });
const Stats         = dynamic(() => import("@/components/home/Stats"),        { ssr: true });
const Industries    = dynamic(() => import("@/components/home/Industries"),   { ssr: true });
const Testimonials  = dynamic(() => import("@/components/home/Testimonials"), { ssr: true });
const FAQ           = dynamic(() => import("@/components/home/FAQ"),          { ssr: true });
const CTA           = dynamic(() => import("@/components/home/CTA"),          { ssr: true });

export default function HomePage() {
  return (
    <>
      <Hero />
      <AISection />
      <ServicesGrid />
      <Stats />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
