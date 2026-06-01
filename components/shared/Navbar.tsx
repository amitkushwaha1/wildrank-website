"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, DollarSign } from "lucide-react";
import Logo from "@/components/shared/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "SEO Services",             href: "/solutions/seo" },
      { label: "PPC Advertising",          href: "/solutions/ppc" },
      { label: "Social Media Marketing",   href: "/solutions/social-media" },
      { label: "Web Development",          href: "/solutions/web-development" },
      { label: "Mobile App Development",   href: "/solutions/mobile-app" },
      { label: "White Label Services",     href: "/solutions/white-label" },
    ],
  },
  {
    label: "Pricing",
    href: "#",
    children: [
      { label: "SEO Pricing",              href: "/pricing/seo" },
      { label: "PPC Pricing",              href: "/pricing/ppc" },
      { label: "Social Media Pricing",     href: "/pricing/social-media" },
      { label: "Web Development Pricing",  href: "/pricing/web-development" },
      { label: "Mobile App Pricing",       href: "/pricing/mobile-app" },
      { label: "White Label Pricing",      href: "/pricing/white-label" },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us",  href: "/company/about" },
      { label: "Our Team",  href: "/company/team" },
      { label: "Careers",   href: "/company/careers" },
      { label: "Contact",   href: "/company/contact" },
    ],
  },
  { label: "Case Studies",        href: "/case-studies" },
  { label: "AI Marketing Agency", href: "/ai-marketing" },
  { label: "Blog",                href: "/blog" },
  { label: "Resources",           href: "/resources" },
];

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [activeDropdown,  setActiveDropdown]  = useState<string | null>(null);
  const [mobileExpanded,  setMobileExpanded]  = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-xl border-b border-[#21262d] shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <motion.a href="/" whileHover={{ scale: 1.03 }} className="flex items-center flex-shrink-0">
            <Logo size="md" />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap"
                >
                  {link.label === "Pricing" && <DollarSign className="w-3.5 h-3.5 text-accent" />}
                  {link.label}
                  {link.children && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  )}
                </a>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-60 rounded-xl overflow-hidden shadow-2xl border border-[#21262d]"
                      style={{ background: "rgba(13,17,23,0.97)", backdropFilter: "blur(20px)" }}
                    >
                      <div className="p-1.5">
                        {link.children.map((child, ci) => (
                          <motion.a
                            key={child.label}
                            href={child.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: ci * 0.04 }}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/8 rounded-lg transition-all duration-150 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0" />
                            {child.label}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <motion.a
              href="/company/contact"
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Free Audit
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-6 h-6" /></motion.span>
                : <motion.span key="menu" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-6 h-6" /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden border-t border-[#21262d] overflow-hidden"
            style={{ background: "rgba(13,17,23,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          {link.label === "Pricing" && <DollarSign className="w-3.5 h-3.5 text-accent" />}
                          {link.label}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-4 mt-1 space-y-1"
                          >
                            {link.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="flex items-center gap-2 px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                                {child.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-[#21262d]">
                <a
                  href="/company/contact"
                  className="block text-center bg-accent text-white text-sm font-semibold px-5 py-3 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Audit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
