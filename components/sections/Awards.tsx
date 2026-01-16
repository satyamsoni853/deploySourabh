"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy, BadgeCheck } from "lucide-react";

const awards = [
  {
    title: "Best Tech Startup 2024",
    org: "Innovate Global Awards",
    icon: <Trophy size={40} className="text-yellow-400" />,
  },
  {
    title: "Excellence in AI Solutions",
    org: "TechFuture Summit",
    icon: <Award size={40} className="text-blue-400" />,
  },
  {
    title: "ISO 27001 Certified",
    org: "International Standards",
    icon: <ShieldCheck size={40} className="text-green-400" />,
  },
  {
    title: "Top Rated Developer",
    org: "Clutch Reviews",
    icon: <BadgeCheck size={40} className="text-[#368ACA]" />,
  },
];

export default function Awards() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA] mb-4">
            Awards & Certifications
          </h2>
          <p className="text-gold text-base md:text-lg">
            Recognized for our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 group hover:border-[#BF953F]/50 hover:shadow-[0_0_20px_rgba(191,149,63,0.1)]"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {award.title}
              </h3>
              <p className="text-sm text-gray-400">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
