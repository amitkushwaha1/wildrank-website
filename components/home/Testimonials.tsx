"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CMO, TechRetail Inc.",
    avatar: "SM",
    rating: 5,
    text: "Wildrank transformed our organic search presence completely. Within 6 months, our traffic grew by 340% and conversions doubled. Their team is incredibly responsive and data-driven.",
    result: "+340% Organic Traffic",
  },
  {
    name: "James Patel",
    role: "Founder, GrowthAgency",
    avatar: "JP",
    rating: 5,
    text: "We white-labeled their SEO and PPC services for our clients. The quality is outstanding and the turnaround is fast. It's like having a 50-person team without the overhead.",
    result: "60% Cost Savings",
  },
  {
    name: "Emily Chen",
    role: "VP Marketing, HealthPlus",
    avatar: "EC",
    rating: 5,
    text: "Their PPC campaigns delivered an 8.5x ROI in the first quarter. The team understood our healthcare compliance requirements and built campaigns that actually convert.",
    result: "8.5x ROI",
  },
  {
    name: "David Okafor",
    role: "CEO, EduLearn Platform",
    avatar: "DO",
    rating: 5,
    text: "The mobile app they built for us has over 50,000 active users. Clean code, beautiful UI, and delivered on time. We've already started our second project with them.",
    result: "50K+ App Users",
  },
  {
    name: "Rachel Torres",
    role: "Director, LuxeCommerce",
    avatar: "RT",
    rating: 5,
    text: "Our e-commerce revenue grew by 220% after partnering with Wildrank. Their holistic approach — SEO, PPC, and CRO together — made all the difference.",
    result: "+220% Revenue",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-gradient py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Results Our Clients <span className="gradient-text">Love</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from real businesses. See what our clients say about working with us.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-8 md:p-12 border border-dark-border relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/20" />

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonials[current].name}</p>
                    <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold px-4 py-2 rounded-full">
                  {testimonials[current].result}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 glass-card border border-dark-border rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 glass-card border border-dark-border rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setCurrent(i)}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-xl p-4 text-left border transition-all duration-300 ${
                i === current
                  ? "border-accent/40 bg-accent/5"
                  : "border-dark-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role.split(",")[0]}</p>
                </div>
              </div>
              <p className="text-green-400 text-xs font-semibold">{t.result}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
