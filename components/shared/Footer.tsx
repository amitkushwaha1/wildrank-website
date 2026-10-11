"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { socialLinks } from "@/lib/socialLinks";

const services = [
  { label: "Search Engine Optimization", href: "/search-engine-optimization-services" },
  { label: "Local SEO Services",          href: "/local-seo-services" },
  { label: "Content Marketing Services",  href: "/content-marketing-services" },
  { label: "Email Marketing Services",    href: "/email-marketing-services" },
  { label: "Pay Per Click (PPC)",         href: "/ppc-services" },
  { label: "Social Media Marketing",      href: "/social-media-marketing-services" },
  { label: "Digital Marketing Services",  href: "/digital-marketing-services" },
  { label: "Mobile Marketing",            href: "/mobile-marketing-services" },
];

const serviceAreas = [
  { label: "Austin",        href: "/austin-seo-company" },
  { label: "Boston",        href: "/boston-seo-company" },
  { label: "Charlotte",     href: "/charlotte-seo-company" },
  { label: "Chicago",       href: "/chicago-seo-company" },
  { label: "Columbus",      href: "/columbus-seo-company" },
  { label: "Dallas",        href: "/dallas-seo-company" },
  { label: "Denver",        href: "/denver-seo-company" },
  { label: "Houston",       href: "/houston-seo-company" },
  { label: "Indianapolis",  href: "/indianapolis-seo-company" },
  { label: "Jacksonville",  href: "/jacksonville-seo-company" },
  { label: "Los Angeles",   href: "/los-angeles-seo-company" },
  { label: "Miami",         href: "/miami-seo-company" },
  { label: "New York",      href: "/new-york-seo-company" },
  { label: "Philadelphia",  href: "/philadelphia-seo-company" },
  { label: "Phoenix",       href: "/phoenix-seo-company" },
  { label: "San Antonio",   href: "/san-antonio-seo-company" },
  { label: "San Diego",     href: "/san-diego-seo-company" },
  { label: "San Francisco", href: "/san-francisco-seo-company" },
  { label: "Seattle",       href: "/seattle-seo-company" },
  { label: "Toronto",       href: "/toronto-seo-company" },
];

const company = [
  { label: "About Us",           href: "/about" },
  { label: "Our Team",           href: "/our-team" },
  { label: "AI Marketing",       href: "/ai-marketing" },
  { label: "Blog",               href: "/blog" },
  { label: "Resources",          href: "/resources" },
];

const socials = socialLinks;

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-white/5 relative overflow-hidden">
      {/* Newsletter strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Stay Ahead of the Algorithm</h3>
              <p className="text-gray-500 text-sm">Get weekly SEO insights and digital marketing tips.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-3">
            <a href="/" className="inline-block mb-6">
              <Logo size="md" />
            </a>
            <p className="text-xs font-semibold text-primary-light tracking-widest uppercase mb-3">
              AI-Powered Digital Marketing
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The agency built to engineer your visibility across all search surfaces — from Google to Gemini, Perplexity to voice. Since 2006.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-accent text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded transition-all duration-300"
            >
              Book Strategy Call <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
            <div className="flex items-center gap-2 mt-6">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+17754715295" className="text-gray-400 hover:text-white text-sm transition-colors">
                +1 (775) 471-5295
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas — two sub-cols */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-5">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {serviceAreas.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — removed as requested */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Wildrank Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-8 h-8 border border-white/10 hover:border-white/30 rounded flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-gray-600 hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-600 hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
      </div>
    </footer>
  );
}
