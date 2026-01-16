"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "FinTech Dashboard Revamp",
    client: "GlobalBank Corp",
    tags: ["React", "Node.js", "Finance"],
    desc: "Redesigned the entire online banking interface, resulting in a 40% increase in user engagement and 25% faster load times.",
  },
  {
    title: "E-Commerce AI Recommendation",
    client: "ShopifyPlus Store",
    tags: ["AI", "Python", "Next.js"],
    desc: "Implemented a custom AI engine to recommend products, boosting average order value by 15% within the first month.",
  },
  {
    title: "Healthcare Patient Portal",
    client: "MediCare Systems",
    tags: ["Security", "Cloud", "HIPAA"],
    desc: "Built a secure, HIPAA-compliant patient portal allowing real-time appointment scheduling and record access.",
  },
  {
    title: "Real Estate Property App",
    client: "EstateKings",
    tags: ["Mobile", "Flutter", "Maps"],
    desc: "Developed a cross-platform mobile app with immersive 3D text-white property tours and real-time agent chat.",
  },
];

export default function DeliveredProjects() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 lg:px-20 text-white relative z-10 w-full flex flex-col justify-center min-h-[50vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
      >
        <p className="text-blue-400 font-bold tracking-wider uppercase mb-4 text-xs md:text-sm">
          Success Stories
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA]">
          Delivering Excellence, <br /> One Project at a Time
        </h2>
        <p className="text-base md:text-lg text-gold">
          We take pride in our ability to turn complex challenges into simple,
          elegant, and powerful solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-6 md:p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-[#BF953F]/50 hover:shadow-[0_0_20px_rgba(191,149,63,0.1)] transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm text-blue-400 font-medium mb-1">
                  {project.client}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center bg-linear-to-r from-blue-900/20 to-[#368ACA]/20 p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Write Your Success Story?
        </h2>
        <Link href="/contact">
          <button className="w-full md:w-auto px-8 py-3 mt-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            Start Your Project
          </button>
        </Link>
      </div>
    </section>
  );
}
