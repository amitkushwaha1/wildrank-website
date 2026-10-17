import FallingStars from "@/components/shared/FallingStars";
import Link from "next/link";

/**
 * LegalPage — the shared shell for /privacy-policy and /terms-of-service.
 *
 * These two routes did not exist at any path, while the footer linked to both
 * with `href="#"` and a legacy /privacy-policy/ was still being served by
 * Google (73 impressions, position 3.6) as a 404. Legal pages are also a
 * baseline E-E-A-T signal, so the content here is written from what the site
 * actually does (GA4, one contact form) rather than boilerplate.
 */
export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: string;
  children: React.ReactNode;
}) {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://wildranktechnologies.com/" },
      { "@type": "ListItem", position: 2, name: title, item: `https://wildranktechnologies.com${title === "Privacy Policy" ? "/privacy-policy" : "/terms-of-service"}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <section className="relative overflow-hidden bg-band pt-32 pb-14">
        <FallingStars density={0.6} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,20,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(17,17,20,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-faint">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <span className="mx-2 text-faint">/</span>
            <span className="text-muted">{title}</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm font-medium text-faint">Last updated: {updated}</p>
          {intro && <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>}
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-ink [&_li]:mt-2.5 [&_li]:leading-[1.75] [&_li]:text-muted [&_p]:mt-4 [&_p]:leading-[1.75] [&_p]:text-muted [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
