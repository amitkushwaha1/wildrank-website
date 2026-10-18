import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";
import { homeFaqs } from "@/lib/homeFaqs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in USA | SEO, Social Media, PPC, Web Design - Wildrank Technologies",
  description:
    "Wildrank Technologies is a digital marketing agency in the USA offering SEO, social media, PPC, web design, and growth-focused marketing solutions.",
  // Self-referencing canonical. The homepage was the one page without one,
  // so nothing pinned it to its own URL. metadataBase supplies the origin.
  alternates: { canonical: "/" },
  // Set explicitly here: `url` must not live on the root layout, or every page
  // in the site would declare the homepage as its own og:url.
  openGraph: {
    url: "/",
    type: "website",
    title: "Digital Marketing Agency in USA | SEO, Social Media, PPC, Web Design - Wildrank Technologies",
    description:
      "Wildrank Technologies is a digital marketing agency in the USA offering SEO, social media, PPC, web design, and growth-focused marketing solutions.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Wildrank Technologies — be the brand Google ranks and AI recommends first",
      },
    ],
  },
};

// Lazy-load below-the-fold sections to reduce initial bundle
const AISection     = dynamic(() => import("@/components/home/AISection"),    { ssr: true });
const ServicesGrid  = dynamic(() => import("@/components/home/ServicesGrid"), { ssr: true });
const Stats         = dynamic(() => import("@/components/home/Stats"),        { ssr: true });
const Industries    = dynamic(() => import("@/components/home/Industries"),   { ssr: true });
const Testimonials  = dynamic(() => import("@/components/home/Testimonials"), { ssr: true });
const Awards        = dynamic(() => import("@/components/home/Awards"),       { ssr: true });
const MissedCalls   = dynamic(() => import("@/components/home/MissedCalls"),   { ssr: true });
const FAQ           = dynamic(() => import("@/components/home/FAQ"),          { ssr: true });
const CTA           = dynamic(() => import("@/components/home/CTA"),          { ssr: true });

/**
 * The homepage FAQ had no markup behind it at all. Fifty-one other pages ship
 * FAQPage; the page most likely to be quoted in an AI answer was the one page
 * whose answers a machine could not read. Built from the same array the
 * accordion renders, so the two can never disagree.
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <AISection />
      <ServicesGrid />
      <Stats />
      <Industries />
      <Testimonials />
      <Awards />
      <MissedCalls />
      <FAQ />
      <CTA />
    </>
  );
}
