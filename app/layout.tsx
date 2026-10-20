import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FallingStars from "@/components/shared/FallingStars";

// Plus Jakarta Sans replaces Inter. Inter was the single most "default tech
// template" tell on the site; Jakarta has the same neutral readability with
// noticeably more character in the heavy weights used by the headings.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

// Used only for small technical labels (measurable/mono details), never body copy.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

// Absolute base for canonical/OG URLs. Must match app/sitemap.ts BASE_URL.
// wildrank.com is a parked third-party domain and must never be declared here.
import { PHONE_E164, SOCIAL_PROFILES } from "@/lib/site";

const SITE_URL = "https://wildranktechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Wildrank Technologies | Digital Marketing & IT Solutions",
  description:
    "Award-winning digital marketing and IT services company. SEO, PPC, Social Media, Web Development, Mobile Apps, and White Label services.",
  verification: {
    google: "A16vNGwuWHzOYZYlxjLt7EUy2VTMvUifQlwIV5QveLE",
  },
  openGraph: {
    type: "website",
    siteName: "Wildrank Technologies",
    locale: "en_US",
    // Every page had no og:image, so a shared link rendered as a bare text
    // card. This is the site-wide fallback; pages may override it.
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Wildrank Technologies — be the brand Google ranks and AI recommends first",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Organization + WebSite schema so Google can render a knowledge panel and
// understand the entity. Luxia and Unplug already ship JSON-LD; WildRank had none.
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Wildrank Technologies",
      // The registered entity is the Indian private limited company; the brand
      // is the trading name. legalName is the schema.org field for exactly this
      // split, and it is the one a due-diligence search matches against the
      // LinkedIn page ("Wildrank Technologies Pvt Ltd") and the Clutch profile.
      legalName: "Wildrank Technologies Pvt Ltd",
      // Aliases, not branding. This is the field an assistant reads to decide
      // that a search for "WildRank" and a search for "Wildrank Technologies"
      // are the same entity — which is the whole point of alternateName.
      // Every visible surface says "Wildrank Technologies".
      alternateName: ["WildRank", "Wildrank"],
      url: SITE_URL,
      description:
        "Digital marketing and IT services company providing SEO, PPC, social media, web development, mobile apps and white label services.",
      email: "gupta@wildranktechnologies.com",
      telephone: PHONE_E164,
      // Entity facts declared here and nowhere else in machine-readable form.
      // A researcher verifying the company reads /contact for the address and
      // the footer for the founding year; without them in the Organization
      // node Google has to guess, and an assistant answering "is this company
      // real?" has nothing structured to cite. Keep these in sync with
      // /contact and with the LinkedIn headquarters (Sheridan, WY).
      foundingDate: "2006",
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 N Gould St",
        addressLocality: "Sheridan",
        addressRegion: "WY",
        postalCode: "82801",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: PHONE_E164,
        email: "info@wildranktechnologies.com",
        areaServed: ["US", "GB", "IN"],
        availableLanguage: ["en"],
      },
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-on-light.png`,
        width: 163,
        height: 60,
      },
      image: `${SITE_URL}/og-default.jpg`,
      // Social profiles. This array existed in lib/site.ts and was imported
      // by nothing, so the Organization node declared no sameAs at all and the
      // profiles were unreachable to anything trying to resolve the entity.
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Wildrank Technologies",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

const GA_MEASUREMENT_ID = "G-EC7689B0MJ";

const GA_INIT_SCRIPT = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      {/* Head: Organization/WebSite JSON-LD only.
          Google Analytics used to sit here as a plain async <script>, which
          put a 180 KB third-party script (73 KB of it unused) in the critical
          path and produced long main-thread tasks during load. It now loads
          via next/script with strategy="lazyOnload" (end of body), so it runs
          after the page is interactive and no longer competes with the LCP. */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${jakarta.className} antialiased`}>
        {/* One ambient star field for the whole site. Fixed and non-interactive,
            z-30: above section content (which tops out at z-10 and would
            otherwise paint over it, since almost every section carries an
            opaque background) and below the sticky navbar at z-50 and the film
            grain at z-70, so the chrome stays crisp. */}
        <FallingStars variant="ambient" fixed className="z-30" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script
          id="ga-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: GA_INIT_SCRIPT }}
        />
      </body>
    </html>
  );
}
