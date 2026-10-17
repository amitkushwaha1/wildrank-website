import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, SERVICES, getIndustry, getService } from "@/data/industries";
import { PHONE_E164 } from "@/lib/site";

const SITE = "https://wildranktechnologies.com";

interface Props {
  params: { industry: string; service: string };
}

export function generateStaticParams() {
  return INDUSTRIES.flatMap((ind) =>
    SERVICES.map((srv) => ({ industry: ind.slug, service: srv.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustry(params.industry);
  const srv = getService(params.service);
  if (!ind || !srv) return {};

  const title = `${srv.shortName} for ${ind.name} | WildRank Technologies`;
  const description = `${srv.summary} Built for ${ind.name.toLowerCase()}, where ${ind.painPoint
    .split(".")[0]
    .toLowerCase()}. Book a consultation.`;

  return {
    title,
    description: description.slice(0, 180),
    alternates: { canonical: `/industries/${ind.slug}/${srv.slug}` },
    keywords: ind.keywords,
  };
}

export default function IndustryServicePage({ params }: Props) {
  const ind = getIndustry(params.industry);
  const srv = getService(params.service);
  if (!ind || !srv) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE}/industries/${ind.slug}/${srv.slug}/#service`,
      name: `${srv.name} for ${ind.name}`,
      serviceType: srv.shortName,
      provider: { "@id": `${SITE}/#organization` },
      url: `${SITE}/industries/${ind.slug}/${srv.slug}`,
      areaServed: { "@type": "Country", name: "United States" },
      description: `${srv.summary} Specifically configured for ${ind.name.toLowerCase()}.`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE}/industries/${ind.slug}/${srv.slug}/#faq`,
      mainEntity: ind.objections.map((o) => ({
        "@type": "Question",
        name: o.q,
        acceptedAnswer: { "@type": "Answer", text: o.a },
      })),
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-light font-semibold uppercase tracking-widest text-sm mb-4">
            {ind.name}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight max-w-4xl">
            {srv.headline} for {ind.name.toLowerCase()}
          </h1>
          <p className="mt-6 text-lg text-muted max-w-3xl leading-relaxed">
            {ind.painPoint}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              Book a consultation
            </Link>
            <Link
              href="/geo-aeo-services"
              className="px-8 py-3 rounded-lg border border-hairline/20 text-ink font-semibold hover:bg-tint/5 transition"
            >
              How {srv.shortName.toLowerCase()} works
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-6">
            What it looks like when the call is lost
          </h2>
          <p className="text-muted leading-relaxed max-w-4xl">{ind.lostCallScene}</p>
          <div className="mt-10">
            <h3 className="text-lg font-bold text-ink mb-3">What {srv.shortName} changes</h3>
            <p className="text-muted leading-relaxed max-w-4xl">{srv.whatItDoes}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-10">
            Questions {ind.name.toLowerCase()} firms ask us
          </h2>
          <div className="max-w-3xl space-y-8">
            {ind.objections.map((o) => (
              <div key={o.q} className="border-b border-dark-border pb-6">
                <h3 className="text-lg font-bold text-ink mb-2">{o.q}</h3>
                <p className="text-muted leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-10">Other sectors we work in</h2>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.filter((i) => i.slug !== ind.slug).map((o) => (
              <Link
                key={o.slug}
                href={`/industries/${o.slug}/${srv.slug}`}
                className="px-4 py-2 rounded-lg bg-tint/5 border border-dark-border text-sm text-muted hover:border-primary/40 transition"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Is this worth doing for {ind.name.toLowerCase()}?
          </h2>
          <p className="text-muted mb-8">
            Sometimes the answer is no, and we will say so.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
          >
            Book a consultation
          </Link>
          <p className="text-subtle text-sm mt-6">Prefer to talk? {PHONE_E164}</p>
        </div>
      </section>
    </>
  );
}