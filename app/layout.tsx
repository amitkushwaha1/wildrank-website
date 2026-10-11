import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

// Absolute base for canonical/OG URLs. Must match app/sitemap.ts BASE_URL.
// wildrank.com is a parked third-party domain and must never be declared here.
const SITE_URL = "https://wildranktechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Wildrank | Digital Marketing & IT Solutions",
  description:
    "Award-winning digital marketing and IT services company. SEO, PPC, Social Media, Web Development, Mobile Apps, and White Label services.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Wildrank Technologies",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
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
      telephone: "+1-363-222-1815",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
