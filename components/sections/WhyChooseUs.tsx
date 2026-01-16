"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Globe,
  Zap,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock size={32} />,
      title: "24/7 Dedicated Support",
      desc: "Our team is always available to resolve your queries and ensure your systems run smoothly without interruption.",
      color: "text-blue-400",
    },
    {
      icon: <Zap size={32} />,
      title: "Agile Methodology",
      desc: "We adapt to changes quickly and deliver increments of value frequently, keeping you in the loop at every stage.",
      color: "text-yellow-400",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Enterprise-Grade Security",
      desc: "Security is baked into our code from day one. We follow industry best practices to protect your data.",
      color: "text-green-400",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      desc: "We serve clients across continents, understanding diverse market needs and cultural nuances.",
      color: "text-[#368ACA]",
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric Approach",
      desc: "Your success is our success. We prioritize your business goals and tailor our solutions to meet them.",
      color: "text-pink-400",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Proven Track Record",
      desc: "With over 150+ successful projects, our portfolio speaks for itself. We deliver results, not just promises.",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 text-white relative z-10 w-full flex flex-col justify-center min-h-[50vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA] mb-6">
          Why Partner With Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          In a crowded digital landscape, we stand out by delivering not just
          code, but value. Here is why leading businesses trust CloudFire IIT to
          drive their digital transformation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all hover:-translate-y-2 group hover:border-[#BF953F]/50 hover:shadow-[0_0_20px_rgba(191,149,63,0.1)]"
          >
            <div
              className={`mb-6 p-4 rounded-full bg-white/5 w-fit ${feature.color} group-hover:scale-110 transition-transform`}
            >
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
