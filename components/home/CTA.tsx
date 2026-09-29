"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

const benefits = [
  "Free website & SEO audit",
  "No long-term contracts",
  "Dedicated account manager",
  "Results in 90 days or money back",
];

export default function CTA() {
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
                href="tel:+13072150728"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                +1 (307) 215-0728
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
            <form className="space-y-4" action="https://formsubmit.co/info@wildranktechnologies.com" method="POST">
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Free Audit Request - Wildrank Technologies" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="fname">
                    First Name
                  </label>
                  <input
                    id="fname"
                    name="First Name"
                    type="text"
                    required
                    placeholder="John"
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="lname">
                    Last Name
                  </label>
                  <input
                    id="lname"
                    name="Last Name"
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5" htmlFor="email">
                  Work Email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5" htmlFor="website">
                  Website URL
                </label>
                <input
                  id="website"
                  name="Website URL"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5" htmlFor="service">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="Service Interested In"
                  required
                  className="w-full bg-[#111] border border-white/10 text-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="">Select a service</option>
                  <option>Search Engine Optimization</option>
                  <option>PPC Management</option>
                  <option>Social Media Marketing</option>
                  <option>Digital Marketing</option>
                  <option>Local SEO</option>
                  <option>Content Marketing</option>
                  <option>Email Marketing</option>
                  <option>Mobile Marketing</option>
                  <option>White Label Services</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5" htmlFor="message">
                  Tell us about your goals
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={3}
                  placeholder="What are you looking to achieve?"
                  className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20"
              >
                Get My Free Audit <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="text-xs text-gray-600 text-center">
                No spam. No commitment. We&apos;ll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
