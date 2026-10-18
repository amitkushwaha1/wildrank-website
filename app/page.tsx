import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
// Static, not dynamic: the client wall is a server component with no
// interactivity, and its ~85 KB of brand-mark paths must not reach the client
// bundle. Importing it directly is what keeps them on the server.
import ClientWall from "@/components/home/ClientWall";
// Also static. It used to be lazily imported, which was right while it sat near
// the bottom of the page; now that it is the section directly under the hero it
// is above the fold on every screen, and lazy-loading an above-the-fold section
// buys a second network round trip to show something the reader is already
// looking at.
import MissedCalls from "@/components/home/MissedCalls";
import dynamic from "next/dynamic";
import { homeFaqs } from "@/lib/homeFaqs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in USA | Wildrank Technologies",
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
      {/* Second, not last. The missed-call section is the most concrete thing
          the business does — a specific failure a visitor has already had, and
          a specific thing that fixes it — so it earns the first scroll. It also
          has to come before the client wall, because the wall answers "who
          trusts you?" and this answers "what do you actually do?", and the
          second question is the one a reader arrives with. */}
      <MissedCalls />
      <ClientWall />
      <AISection />
      <ServicesGrid />
      <Stats />
      <Industries />
      <Testimonials />
      <Awards />
      <FAQ />
      <CTA />
    </>
  );
}
