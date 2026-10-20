import FallingStars from "@/components/shared/FallingStars";
import CTA from "@/components/home/CTA";
import Link from "next/link";
import type { Block, BlogPost } from "@/data/blog";

const SITE = "https://wildranktechnologies.com";

/**
 * Renders one article plus its structured data.
 *
 * Article schema uses the company as author and publisher — the site publishes
 * no personal bylines, so there is no Person node to attach. FAQPage is emitted
 * only when the post actually carries FAQs, because FAQ markup without matching
 * on-page questions is a guidelines violation.
 */
function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-12 text-2xl font-bold tracking-tight text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-8 text-lg font-bold tracking-tight text-ink">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-5">
          {block.items.map((it, k) => (
            <li key={k} className="leading-[1.75] text-muted">
              {it}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-5">
          {block.items.map((it, k) => (
            <li key={k} className="leading-[1.75] text-muted">
              {it}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="mt-6 border-l-2 border-primary/40 pl-5 text-lg italic text-ink">
          {block.text}
        </blockquote>
      );
    case "note":
      return (
        <aside key={i} className="mt-6 rounded-xl border border-border bg-band p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">Worked example</p>
          <p className="mt-2 leading-[1.75] text-muted">{block.text}</p>
        </aside>
      );
    default:
      return (
        <p key={i} className="mt-4 leading-[1.75] text-muted">
          {block.text}
        </p>
      );
  }
}

export default function ArticlePage({ post }: { post: BlogPost }) {
  const url = `${SITE}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    ...(post.updated ? { dateModified: post.updated } : { dateModified: post.date }),
    articleSection: post.category,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": `${SITE}/#organization` },
    publisher: { "@id": `${SITE}/#organization` },
    image: [`${SITE}/icon-512.png`, `${SITE}/og-default.jpg`],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema =
    post.faqs && post.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const dateLabel = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <article>
        <section className="relative overflow-hidden bg-band pt-32 pb-14">
          <FallingStars density={0.6} />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-faint">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-muted">{post.category}</span>
            </nav>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted">{post.description}</p>

            <p className="mt-6 text-sm font-medium text-faint">
              {dateLabel} · {post.readingMinutes} min read · By Wildrank Technologies
            </p>
          </div>
        </section>

        <section className="bg-canvas py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="[&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30">
              {post.sections.map(renderBlock)}
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold tracking-tight text-ink">Common questions</h2>
                <dl className="mt-6 space-y-6">
                  {post.faqs.map((f, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <dt className="text-base font-bold text-ink">{f.q}</dt>
                      <dd className="mt-2 leading-[1.75] text-muted">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-14 rounded-xl border border-border bg-band p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">Related service</p>
              <p className="mt-2 text-lg font-bold text-ink">
                <Link href={post.related.href} className="text-primary underline decoration-primary/30">
                  {post.related.label}
                </Link>
              </p>
              <p className="mt-2 text-muted">
                We do this work for clients in the US and India. If it would help to talk it through,{" "}
                <Link href="/contact" className="font-semibold text-primary underline decoration-primary/30">
                  get a free audit
                </Link>
                .
              </p>
            </div>

            <p className="mt-10">
              <Link href="/blog" className="text-sm font-semibold text-primary underline decoration-primary/30">
                ← All articles
              </Link>
            </p>
          </div>
        </section>
      </article>

      <CTA />
    </>
  );
}
