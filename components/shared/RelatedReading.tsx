import Link from "next/link";

/**
 * RelatedReading — a single "further reading" link from a service page back to
 * the article that covers the same subject. The article already links forward to
 * the service page; this is the reverse edge, so the topic cluster is
 * crawlable in both directions.
 *
 * Keep it to one link per page. A wall of "related posts" dilutes the signal and
 * reads as an SEO block rather than a genuine recommendation.
 */
export default function RelatedReading({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <section className="bg-canvas py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-faint">
            Further reading
          </p>
          <p className="mt-3 text-lg font-bold tracking-tight text-ink">
            <Link
              href={`/blog/${slug}`}
              className="text-primary underline decoration-primary/30"
            >
              {title}
            </Link>
          </p>
          <p className="mt-2 text-muted">
            A practical guide from the Wildrank Technologies team.
          </p>
        </div>
      </div>
    </section>
  );
}
