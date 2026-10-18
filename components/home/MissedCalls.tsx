"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";

/**
 * The AI-adoption half of the pitch, and the homepage's only route into
 * /ai-receptionist.
 *
 * The rest of this page answers "how do I get found?". This answers the
 * question immediately after it — "what happens when someone actually tries to
 * reach me?" — and it earns its place on the homepage because a missed call has
 * no second chance: it cannot be ranking-recovered later, and it leaves nothing
 * behind to report on.
 *
 * The definition panel exists because the section was making its argument
 * faster than a reader who has never heard the term could follow it. "AI
 * receptionist" is now in the first line, in plain words, before any of the
 * argument. Everything below the panel is the same case it was.
 *
 * No statistic is claimed here. /ai-receptionist carries the headline number
 * for its own argument; this section makes the argument without repeating a
 * figure that has no source, so the two pages cannot contradict each other.
 *
 * The panel on the right is the process rendered as its own artwork — a phone
 * mock-up that walks the four steps. It describes the mechanism, not a
 * screenshot or a claim about results. Each step matches what /ai-receptionist
 * says the system does, and the timings come from the same place.
 */
const CAPABILITIES = [
  ["Answers outside hours", "Nights, weekends, peak and the busy line."],
  ["Texts back in seconds", "Voicemail or a hang-up triggers an SMS to the caller's own number."],
  ["Books, or routes to a human", "A booking link for routine jobs, a live handover for anything urgent."],
] as const;

export default function MissedCalls() {
  return (
    <section className="py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ── Left — what it is, then why it matters ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-xs font-bold shadow-lg shadow-primary/25"
            >
              AI Receptionist · Missed Call Recovery
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-6 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Every missed call is a lead{" "}
              <span className="gradient-text">you never hear about</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-6 rounded-2xl border border-primary/20 bg-primary/[0.06] p-5"
            >
              <p className="text-sm leading-relaxed text-ink">
                <span className="font-bold">What it is.</span> An AI receptionist
                answers your phone when nobody else can — it greets the caller,
                works out what they need, books the job into your calendar, and
                texts back anyone whose call it could not take. It exists
                because you are already losing calls you never see, and a call
                that never connected leaves no record to report on.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-base leading-relaxed text-muted"
            >
              Search earns the enquiry. It does not answer the phone. When your
              line is busy, it is after hours, or the whole team is on a job, the
              caller rarely leaves a voicemail — they dial the next result on the
              list.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="space-y-3"
            >
              {CAPABILITIES.map(([title, note]) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm leading-relaxed text-muted">
                    <span className="font-semibold text-ink">{title}</span>
                    {" — "}
                    {note}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/ai-receptionist"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary-light"
              >
                How missed call recovery works
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p className="mt-3 text-sm text-subtle">
                Setup is $499. Ongoing usage is agreed at your call volume.
              </p>
            </motion.div>
          </div>

          {/* ── Right — the process as its own artwork, matching the steps on
              /ai-receptionist so the two pages cannot contradict each other. ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div
              className="glass-card ring-glow rounded-3xl border border-hairline/10 p-3"
              style={{ "--ring-hue": "205" } as React.CSSProperties}
            >
              {/* Capped to one screen height so the whole four-step artwork is
                  visible without scrolling; the portrait artwork letterboxes
                  inside the panel on short viewports. */}
              <img
                src="/images/missed-call-process.webp"
                alt="How the AI receptionist missed call recovery process works: a busy line sends an automated text, the caller replies, and the booking lands in the CRM."
                width={768}
                height={1376}
                decoding="async"
                className="mx-auto h-auto max-h-[min(78vh,1100px)] w-auto max-w-full rounded-2xl object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
