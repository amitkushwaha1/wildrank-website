import { clientMarks, type ClientMark } from "@/lib/clientMarks";

/**
 * Client wall.
 *
 * Two rows rolling in opposite directions. The rows are pure CSS keyframes on a
 * track that repeats three times: the animation shifts by exactly one repeat,
 * so the restart is pixel-identical to the start and the loop has no seam. Two
 * repeats always remain ahead of the viewport, which is why three are rendered
 * rather than two — with two, a display wider than one repeat runs off the end
 * of the track and shows a gap before the loop returns. Only the first repeat
 * is real content; the other two are aria-hidden, so the wall is announced as
 * thirty-two companies rather than ninety-six.
 *
 * This is a server component on purpose. Nothing here is interactive and the
 * motion is entirely CSS, so the wall costs no JavaScript at all: it keeps
 * moving under a slow connection and before hydration, which is the opposite of
 * every other animated block on the page. The heading is left un-animated for
 * the same reason.
 *
 * The marks are files, not inline paths. Inlined, this list is about 85 KB of
 * path data sitting in the homepage HTML, and coordinate digits barely
 * compress — the document went from ~38 KB to 97 KB gzipped while it was
 * inline. As files the document stays light, the three repeats cost nothing
 * extra because they are the same URL, and each mark caches. It is also the
 * shape the real client list needs, since those arrive as logo files rather
 * than as geometry.
 *
 * The wall is greyscale and colours on hover. That is the standard treatment
 * for a logo strip and it is also what keeps the different palettes from
 * fighting the brand: at rest the marks are neutral, so the row reads as one
 * band, and the colour is a reward for pointing at one.
 *
 * ⚠ The list itself is still a placeholder — see lib/clientMarks.ts. The
 * owner has seen it and curates it directly, so the page no longer carries a
 * "placeholder" caption: the set is replaced by editing that one array, and a
 * notice on the page would be noise until then. It must not be published with
 * the current list.
 */

// Alternating, so both rows carry the same US/India mix rather than one row
// being the US list and the other the Indian one.
const rowA = clientMarks.filter((_, i) => i % 2 === 0);
const rowB = clientMarks.filter((_, i) => i % 2 === 1);

function Mark({ mark, decorative }: { mark: ClientMark; decorative?: boolean }) {
  return (
    <div
      aria-hidden={decorative || undefined}
      className="group/tile ring-glow flex h-14 min-w-[8.5rem] shrink-0 items-center justify-center rounded-xl border border-hairline/10 bg-tint/[0.03] px-4"
    >
      {/* The name is not printed beside the mark, and that is the whole point of
          this tile: at least a third of the marks in the set ARE the wordmark —
          Zomato, Paytm, Mahindra, Intel, SAP, Samsung, FedEx and the rest — so
          "Zomato Zomato" was what the tile used to read. Measuring ink
          proportions does not separate the two either: Zapier and WP Engine are
          wordmarks inside a square badge, so their aspect ratio says "glyph".

          So the mark carries the tile alone and the name goes to an sr-only
          span. It is still in the DOM, so crawlers and screen readers get the
          list of names either way, and it is the accessible name of the tile.
          Dropping the printed name also means every tile can be the same size
          and the marks can be big enough to read: a wordmark now gets 104px of
          width instead of the ~54px it had when a line of text sat next to it,
          which was rendering the longer ones about nine pixels tall.

          alt is empty rather than repeated, because the sr-only span is already
          the accessible name — two of them would be announced twice.

          Not lazy-loaded, deliberately. These sit inside a track that moves by
          CSS transform, and the lazy heuristic left a third of them unloaded
          even after the wall had been scrolled to — which shows as an empty
          tile. Thirty-two small SVGs behind one cached URL each are cheaper
          than a wall with holes in it. */}
      <img
        src={mark.file}
        alt=""
        width={104}
        height={28}
        decoding="async"
        className="h-7 w-auto max-w-[6.5rem] shrink-0 object-contain opacity-55 grayscale transition-all duration-300 group-hover/tile:opacity-100 group-hover/tile:grayscale-0"
      />
      <span className="sr-only">{mark.name}</span>
    </div>
  );
}

function Row({ marks, reverse }: { marks: ClientMark[]; reverse?: boolean }) {
  const copies = [...marks, ...marks, ...marks];
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto">
      <div
        className={`flex w-max items-center gap-4 pr-4 ${
          reverse ? "animate-marquee-slow-right" : "animate-marquee-slow-left"
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {copies.map((mark, i) => (
          <Mark
            key={`${mark.name}-${i}`}
            mark={mark}
            decorative={i >= marks.length}
          />
        ))}
      </div>
    </div>
  );
}

export default function ClientWall() {
  return (
    <section id="trusted-by" className="py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Trusted By
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Trusted by the largest{" "}
            <span className="gradient-text">global enterprises</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Global enterprise platforms alongside fast-growing US mid-market
            brands and Indian market leaders — the mix this list is drawn from.
          </p>
        </div>
      </div>

      {/* Full-bleed: the rows should run past the content column, because a
          marquee that stops at the gutter reads as broken rather than moving. */}
      <div className="space-y-4">
        <Row marks={rowA} />
        <Row marks={rowB} reverse />
      </div>
    </section>
  );
}
