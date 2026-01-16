"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Code2,
  Share2,
  TrendingUp,
  Palette,
  ArrowUpRight,
} from "lucide-react";

import Link from "next/link";

const services = [
  {
    id: "app-development",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications crafted for performance and user engagement.",
    icon: <Smartphone size={32} className="text-blue-400" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Responsive, high-speed websites and web apps built with the latest technologies like Next.js.",
    icon: <Globe size={32} className="text-[#368ACA]" />,
    gradient: "from-[#368ACA]/20 to-pink-500/20",
    border: "group-hover:border-[#368ACA]/50",
  },
  {
    id: "software-solutions",
    title: "Software Solutions",
    description:
      "Custom software tailored to streamline your specific business processes and workflow.",
    icon: <Code2 size={32} className="text-green-400" />,
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50",
  },
  {
    id: "social-media-mgmt",
    title: "Social Media Mgmt",
    description:
      "Strategic content planning and management to grow your brand presence online effectively.",
    icon: <Share2 size={32} className="text-pink-400" />,
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO, PPC, and data-driven campaigns to drive traffic and convert leads into customers.",
    icon: <TrendingUp size={32} className="text-yellow-400" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Intuitive and beautiful user interfaces that provide seamless and enjoyable user experiences.",
    icon: <Palette size={32} className="text-red-400" />,
    gradient: "from-red-500/20 to-orange-500/20",
    border: "group-hover:border-red-500/50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-24 px-4 md:px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-xs md:text-sm"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA] mt-3 mb-4 md:mb-6"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gold max-w-2xl mx-auto text-base md:text-lg"
          >
            Comprehensive digital solutions designed to elevate your business
            into the stratosphere.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 ${service.border}`}
            >
              <Link
                href={`/services/${service.id}`}
                className="absolute inset-0 z-20"
                aria-label={`View details for ${service.title}`}
              />
              <div
                className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`}
              />

              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
