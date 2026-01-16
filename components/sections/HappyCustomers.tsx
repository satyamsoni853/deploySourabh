"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "40+" },
  { label: "Years Experience", value: "5+" },
  { label: "Awards Won", value: "12" },
];

export default function HappyCustomers() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for Client Logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Just text placeholders for now to represent logos */}
            {[
              "TechCorp",
              "InnovateX",
              "FutureSoft",
              "AlphaWave",
              "BrightMedia",
            ].map((client, i) => (
              <span key={i} className="text-xl font-bold text-white">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
