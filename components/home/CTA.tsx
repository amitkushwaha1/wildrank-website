"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Loader2,
  AlertCircle,
  Send,
} from "lucide-react";
import { submitForm } from "@/lib/submitForm";

const benefits = [
  "Free website & SEO audit",
  "No long-term contracts",
  "Dedicated account manager",
  "Results in 90 days or money back",
];

const services = [
  "Search Engine Optimization",
  "PPC Management",
  "Social Media Marketing",
  "Digital Marketing",
  "Local SEO",
  "Content Marketing",
  "Email Marketing",
  "Mobile Marketing",
  "White Label Services",
];

const inputClass =
  "w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors";
const labelClass = "block text-xs text-gray-400 mb-1.5";

type Status = "idle" | "sending" | "success" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      data[key] = typeof value === "string" ? value : "";
    });

    // Honeypot filled in by a bot — silently pretend it worked.
    if (data._honey) {
      setStatus("success");
      setFeedback("Thanks! We'll be in touch shortly.");
      form.reset();
      return;
    }

    setStatus("sending");
    setFeedback("");

    const result = await submitForm(data, "New Free Audit Request - Wildrank Technologies");

    if (result.ok) {
      setStatus("success");
      setFeedback(result.message);
      form.reset();
    } else {
      setStatus("error");
      setFeedback(result.message);
    }
  }

  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Grow Your{" "}
              <span className="gradient-text">Digital Presence?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Get a free, no-obligation audit of your website and digital marketing. Our experts will identify quick wins and long-term opportunities tailored to your business.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+17754715295"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                +1 (775) 471-5295
              </a>
              <a
                href="mailto:info@wildranktechnologies.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                info@wildranktechnologies.com
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 border border-dark-border"
          >
            <h3 className="text-xl font-bold text-white mb-6">Get Your Free Audit</h3>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="text-center py-8"
                role="status"
                aria-live="polite"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  Request Received!
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Thanks — your free audit request is on its way. Our team will
                  get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFeedback("");
                  }}
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" /> Submit another request
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate={false}>
                {/* Spam trap */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="fname">
                      First Name
                    </label>
                    <input
                      id="fname"
                      name="First Name"
                      type="text"
                      required
                      placeholder="John"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      id="lname"
                      name="Last Name"
                      type="text"
                      required
                      placeholder="Doe"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="website">
                    Website URL
                  </label>
                  <input
                    id="website"
                    name="Website URL"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="service">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="Service Interested In"
                    required
                    className={inputClass}
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={3}
                    placeholder="What are you looking to achieve?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && feedback && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3"
                  >
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{feedback}</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  disabled={status === "sending"}
                  aria-busy={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Get My Free Audit <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-600 text-center">
                  No spam. No commitment. We&apos;ll respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
