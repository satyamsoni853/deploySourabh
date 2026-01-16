"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full min-h-dvh flex flex-col items-center justify-center text-center px-4 overflow-hidden py-20"
    >
      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <Rocket size={16} className="text-gold" />
          <span className="text-gold text-sm font-medium tracking-wide">
            Next-Gen Digital Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-8xl font-black font-heading text-white leading-tight mb-6 md:mb-8 tracking-tight"
        >
          We Build The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-[#368ACA] to-pink-500 animate-gradient">
            Digital Universe
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light tracking-wide px-4"
        >
          Elevate your brand with cutting-edge web development, mobile apps, and
          strategic marketing that defies gravity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-gold-gradient text-black font-bold font-heading rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(191,149,63,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Launch Project{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 border border-gold/30 text-gold font-medium font-heading rounded-full hover:bg-gold/10 transition-all hover:border-gold/60 backdrop-blur-sm"
          >
            View Mission Log
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
