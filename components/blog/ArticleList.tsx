import Link from "next/link";
import { sortedPosts } from "@/data/blog";

/**
 * The published articles on /blog.
 *
 * The page previously showed only topic cards that linked to service pages, so
 * a visitor looking for an article found none, and there was nothing on the
 * domain for anyone to cite or link to. This renders the real posts.
 */
export default function ArticleList() {
  const posts = sortedPosts();
  if (posts.length === 0) return null;

  return (
    <section className="bg-canvas py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-light">
            Latest articles
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">Guides and breakdowns</h2>
          <p className="mt-4 text-muted">
            Written by the team, in the open. No invented statistics — where a number appears it is
            a worked example with its assumptions stated.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_50px_-24px_rgba(17,17,20,0.35)]"
            >
              <span className="mb-4 inline-flex w-fit rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-light">
                {post.category}
              </span>
              <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                {post.readingMinutes} min read
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
