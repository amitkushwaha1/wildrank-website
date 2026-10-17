import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
import { PHONE_E164 } from "@/lib/site";

const SITE_URL = "https://wildranktechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Wildrank | Digital Marketing & IT Solutions",
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
      alternateName: "WildRank",
      url: SITE_URL,
      description:
        "Digital marketing and IT services company providing SEO, PPC, social media, web development, mobile apps and white label services.",
      email: "gupta@wildranktechnologies.com",
      telephone: PHONE_E164,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-on-light.png`,
        width: 163,
        height: 60,
      },
      image: `${SITE_URL}/og-default.jpg`,
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
      {/* Head scripts: Google Analytics + Organization/WebSite JSON-LD */}
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script dangerouslySetInnerHTML={{ __html: GA_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${jakarta.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
