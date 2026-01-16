"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Cpu, MessageSquare, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import AiSolutions from "@/components/sections/AiSolutions";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-20 text-white overflow-hidden relative">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center max-w-5xl mx-auto mb-20"
      >
        <div className="inline-block p-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Bot size={16} /> Next-Gen Intelligence
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
          Intelligent Automation for the Future
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Revolutionize your workflow with AI-driven agents and process
          automation. We build autonomous systems that scale your business
          operations 24/7.
        </p>
      </motion.div>

      {/* Solutions Section */}
      <AiSolutions />

      {/* Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mb-20"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Featured AI Projects
        </motion.h2>

        <div className="space-y-12">
          {/* Project 1 */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-colors"
          >
            <div className="w-full md:w-1/2 aspect-video bg-linear-to-br from-blue-900/50 to-black rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <MessageSquare
                size={64}
                className="text-blue-400 relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                <Zap size={16} /> <span>Live Production</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Customer Success Bot</h3>
              <p className="text-gray-300 mb-6">
                A custom LLM-powered chatbot integrated with Shopify. It handles
                80% of routine queries regarding order status and returns,
                escalating only complex issues to human agents. Reduced response
                time by 95%.
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "LangChain", "Shopify API", "Vector DB"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-colors"
          >
            <div className="w-full md:w-1/2 aspect-video bg-linear-to-br from-purple-900/50 to-black rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <Cpu size={64} className="text-purple-400 relative z-10" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                <Workflow size={16} /> <span>Internal Tool</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Lead Qualification System
              </h3>
              <p className="text-gray-300 mb-6">
                Automated workflow that captures inbound leads, enriches data
                using external APIs, scores them based on intent, and routes
                high-value prospects directly to the CRM and Slack for immediate
                action.
              </p>
              <div className="flex flex-wrap gap-2">
                {["n8n", "Salesforce", "Clearbit", "Slack API"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
