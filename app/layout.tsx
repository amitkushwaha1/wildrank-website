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

export const metadata: Metadata = {
  title: "Wildrank | Digital Marketing & IT Solutions",
  description:
    "Award-winning digital marketing and IT services company. SEO, PPC, Social Media, Web Development, Mobile Apps, and White Label services.",
  verification: {
    google: "A16vNGwuWHzOYZYlxjLt7EUy2VTMvUifQlwIV5QveLE",
  },
};

const GA_MEASUREMENT_ID = "G-EC7689B0MJ";

const GA_INIT_SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Google Analytics (gtag.js) — both tags live in <head> */}
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script dangerouslySetInnerHTML={{ __html: GA_INIT_SCRIPT }} />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
