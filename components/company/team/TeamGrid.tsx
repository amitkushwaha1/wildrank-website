"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import XLogo from "@/components/shared/XLogo";

const departments = [
  {
    name: "Leadership",
    members: [
      { name: "Rajiv Sharma", role: "CEO & Founder", initials: "RS", color: "from-orange-500 to-red-600" },
      { name: "Priya Mehta", role: "COO", initials: "PM", color: "from-blue-500 to-blue-700" },
      { name: "Arjun Kapoor", role: "CTO", initials: "AK", color: "from-green-500 to-green-700" },
      { name: "Neha Singh", role: "CMO", initials: "NS", color: "from-purple-500 to-purple-700" },
    ],
  },
  {
    name: "Digital Marketing",
    members: [
      { name: "Vikram Patel", role: "Head of SEO", initials: "VP", color: "from-cyan-500 to-cyan-700" },
      { name: "Ananya Roy", role: "PPC Lead", initials: "AR", color: "from-pink-500 to-pink-700" },
      { name: "Rohan Gupta", role: "Social Media Director", initials: "RG", color: "from-yellow-500 to-yellow-700" },
      { name: "Kavya Nair", role: "Content Strategist", initials: "KN", color: "from-indigo-500 to-indigo-700" },
    ],
  },
  {
    name: "Technology",
    members: [
      { name: "Aditya Kumar", role: "Lead Developer", initials: "AK", color: "from-teal-500 to-teal-700" },
      { name: "Shreya Joshi", role: "Mobile App Lead", initials: "SJ", color: "from-rose-500 to-rose-700" },
      { name: "Manish Verma", role: "UI/UX Director", initials: "MV", color: "from-amber-500 to-amber-700" },
      { name: "Pooja Iyer", role: "DevOps Engineer", initials: "PI", color: "from-lime-500 to-lime-700" },
    ],
  },
];

export default function TeamGrid() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {departments.map((dept, di) => (
          <div key={dept.name} className="mb-16 last:mb-0">
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent inline-block" />
              {dept.name}
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {dept.members.map((member, i) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-2xl p-6 border border-dark-border text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {member.initials}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{member.role}</p>
                  <div className="flex items-center justify-center gap-2">
                    <a href="#" aria-label="LinkedIn" className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" aria-label="X" className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                      <XLogo className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Join the team CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-card rounded-2xl p-10 border border-accent/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Want to Join the Team?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">We&apos;re always looking for talented people who are passionate about digital marketing and technology.</p>
          <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
