"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Droplet,
  Puzzle,
  ShoppingBag,
  BrainCircuit,
  User,
  FileText,
  Laptop,
  Network,
  Globe,
  ArrowUpRight,
  Bot,
  Workflow,
  Brain,
} from "lucide-react";
import Link from "next/link";

// Tech Stack Data
const techStack = [
  {
    icon: Layers,
    name: "Laravel + AI",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Droplet,
    name: "Drupal + AI",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Puzzle,
    name: "Moodle + AI",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: ShoppingBag,
    name: "Shopify + AI",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: BrainCircuit,
    name: "Artificial Intelligence",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const solutions = [
  {
    slug: "ui-ux-design",
    icon: User,
    title: "UI/UX Design for Learning & Enterprise Apps",
    desc: "Crafting clean, engaging interfaces that boost user adoption.",
    className: "md:col-span-1",
    gradient: "from-pink-500/20 to-purple-500/5",
    border: "group-hover:border-pink-500/50",
    iconColor: "text-pink-400",
  },
  {
    slug: "moodle-lms-development",
    icon: FileText,
    title: "Moodle & LMS Development",
    desc: "Fully customized LMS platforms tailored to your training goals. From UI enhancements to advanced workflows.",
    className: "md:col-span-2",
    gradient: "from-blue-500/20 to-cyan-500/5",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    slug: "ai-elearning-solutions",
    icon: Laptop,
    title: "AI-Powered eLearning Solutions",
    desc: "Transform your LMS with AI: personalized paths, smart assessments, and auto-grading.",
    className: "md:col-span-2",
    gradient: "from-orange-500/20 to-red-500/5",
    border: "group-hover:border-orange-500/50",
    iconColor: "text-orange-400",
  },
  {
    slug: "web-app-development",
    icon: Network,
    title: "Web & App Development",
    desc: "High-performance, secure digital products built for scale.",
    className: "md:col-span-1",
    gradient: "from-emerald-500/20 to-green-500/5",
    border: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
  },
  {
    slug: "autonomous-ai-agents",
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "Deploy intelligent agents that handle customer support, sales, and complex workflows 24/7.",
    className: "md:col-span-2",
    gradient: "from-purple-500/20 to-pink-500/5",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    slug: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Deep integration with n8n & Zapier to automate repetitive business processes.",
    className: "md:col-span-1",
    gradient: "from-cyan-500/20 to-blue-500/5",
    border: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
  },
  {
    slug: "intelligent-data-parsing",
    icon: Brain,
    title: "Intelligent Data Parsing",
    desc: "Extract structured insights from unstructured documents like invoices and contracts.",
    className: "md:col-span-3",
    gradient: "from-yellow-500/20 to-amber-500/5",
    border: "group-hover:border-yellow-500/50",
    iconColor: "text-yellow-400",
  },
  {
    slug: "cloud-migration-upgrades",
    icon: Globe,
    title: "Cloud Migration & Upgrades",
    desc: "Smooth system upgrades and cloud migrations with zero data loss.",
    className: "md:col-span-3",
    gradient: "from-indigo-500/20 to-violet-500/5",
    border: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-400",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AiSolutions() {
  return (
    <section className="py-24 px-4 md:px-6 relative z-10 w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-light">
              Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
                Digital Intelligence
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center md:justify-end"
          >
            <p className="text-gray-400 text-lg max-w-sm">
              Combining simplified traditional expertise with cutting-edge AI to
              build smarter platforms.
            </p>
          </motion.div>
        </div>

        {/* Infinite Tech Stack Marquee */}
        <div className="relative mb-24 w-full overflow-hidden mask-linear-fade">
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] cursor-pointer">
            {/* Seamless Double Loop */}
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 mx-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 backdrop-blur-sm"
              >
                <div
                  className={`p-2 rounded-full bg-white/5 ${tech.bg} group-hover:scale-110 transition-transform`}
                >
                  <tech.icon size={20} className={`${tech.color}`} />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {solutions.map((item, index) => (
            <Link
              key={index}
              href={`/ai-automation/${item.slug}`}
              className={`${item.className} block h-full`}
            >
              <motion.div
                variants={itemVariants}
                className={`group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between ${item.border}`}
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 mb-6 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-8 flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    <span>Explore Solution</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
