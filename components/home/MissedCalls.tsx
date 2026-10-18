"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  MessageSquare,
  PhoneMissed,
  type LucideIcon,
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
 * The panel on the right is a description of the mechanism, not a screenshot or
 * a claim about results. Each step matches what /ai-receptionist says the system
 * does, and the timings come from the same place.
 */
const TIMELINE: {
  icon: LucideIcon;
  time: string;
  title: string;
  detail: string;
  strong?: boolean;
}[] = [
  {
    icon: PhoneMissed,
    time: "2:14 PM",
    title: "Missed call",
    detail: "Line busy — nobody free to pick up.",
  },
  {
    icon: MessageSquare,
    time: "2:14 PM",
    title: "Text sent",
    detail: "\u201CSorry we missed you — reply here and we will get you booked in.\u201D",
  },
  {
    icon: BellRing,
    time: "2:15 PM",
    title: "Caller replies",
    detail: "\u201CCan someone come out on Thursday?\u201D",
  },
  {
    icon: CalendarCheck,
    time: "2:16 PM",
    title: "Booked",
    detail: "Thursday, 9:00 AM — job details land in your CRM.",
    strong: true,
  },
];

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

          {/* ── Right — what the system does with the call ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="glass-card rounded-3xl border border-hairline/10 p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-hairline/10 pb-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <p className="text-sm font-semibold text-ink">
                    Missed call recovery
                  </p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {TIMELINE.map(({ icon: Icon, time, title, detail, strong }, i) => (
                  <div key={title} className="relative flex flex-col items-center text-center">
                    {/* Connector line between steps */}
                    {i < TIMELINE.length - 1 && (
                      <span className="absolute left-[calc(50%+1.5rem)] top-4 hidden h-px w-[calc(100%-3rem)] bg-hairline/20 sm:block" />
                    )}
                    <span
                      className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        strong
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary-light"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-3 text-sm font-bold text-ink">{title}</p>
                    <span className="font-mono text-[10px] text-subtle">{time}</span>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-subtle">
              What happens on a call your team cannot answer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
