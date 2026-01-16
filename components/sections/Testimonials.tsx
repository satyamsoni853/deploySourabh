"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
    content:
      "CloudFire transformed our digital presence. Their attention to detail and futuristic design approach is unmatched.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder, Appify",
    content:
      "The best development team we've worked with. Delivered on time and the animations are buttery smooth.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Dir, FutureMedia",
    content:
      "Our leads increased by 200% after they revamped our website. Highly recommended for any growing business.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 px-4 md:px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA] mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gold text-lg">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/40 border border-white/10 p-8 rounded-3xl relative backdrop-blur-md hover:border-[#BF953F]/50 hover:shadow-[0_0_20px_rgba(191,149,63,0.1)] transition-all duration-300"
            >
              <div className="absolute -top-6 left-8 bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-600/20">
                <MessageSquareQuote size={24} className="text-white" />
              </div>

              <div className="mt-6 mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  &quot;{t.content}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-gray-700 to-gray-600" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
