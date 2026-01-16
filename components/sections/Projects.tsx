"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Planet",
    category: "Web Development",
    description:
      "A full-stack e-commerce solution with 3D product previews and AI recommendations.",
    color: "from-blue-600 to-indigo-600",
    tags: ["Next.js", "Three.js", "Stripe"],
  },
  {
    title: "Orbital Fitness",
    category: "Mobile App",
    description:
      "Cross-platform fitness tracking application with gamified space workouts.",
    color: "from-[#368ACA] to-pink-600",
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    title: "Nebula Dashboard",
    category: "SaaS Platform",
    description:
      "Real-time analytics dashboard for enterprise cloud management.",
    color: "from-orange-500 to-red-600",
    tags: ["Vue", "D3.js", "AWS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-24 px-4 md:px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured Missions
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
              Launchpad needed? Here are some of our successful deployments
              across the galaxy.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-white/10"
            >
              {/* Image Placeholder Area */}
              <div
                className={`h-48 w-full bg-linear-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium text-sm">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
