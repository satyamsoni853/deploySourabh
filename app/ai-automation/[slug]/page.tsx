"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";

// Data Dictionary for Solutions (In a real app, this might come from a CMS or separate file)
const solutionData: Record<string, any> = {
  "ui-ux-design": {
    title: "UI/UX Design for Learning & Enterprise Apps",
    description:
      "We craft clean, engaging, conversion-focused interfaces that help users learn faster, navigate easier, and interact more confidently with your platform.",
    details:
      "Our design philosophy centers on the user. We don't just make things look good; we make them work intuitively. By combining behavioral psychology with modern aesthetic trends, we create interfaces that reduce friction and increase adoption rates for LMS and enterprise applications.",
    features: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "Design Systems & Component Libraries",
      "Accessibility Compliance (WCAG)",
    ],
  },
  "moodle-lms-development": {
    title: "Moodle & LMS Development",
    description:
      "Fully customized LMS platforms tailored to your training goals. From UI enhancements to advanced workflows.",
    details:
      "Moodle is powerful, but often requires significant customization to meet specific organizational needs. We specialize in extending Moodle's core capabilities, creating custom themes, plugins, and reporting dashboards that transform a standard install into a bespoke learning ecosystem.",
    features: [
      "Custom Theme Development",
      "Plugin Development & Integration",
      "Performance Optimization",
      "SAML/SSO Authentication Setup",
    ],
  },
  "ai-elearning-solutions": {
    title: "AI-Powered eLearning Solutions",
    description:
      "Transform your LMS with AI: personalized paths, smart assessments, and auto-grading.",
    details:
      "The future of learning is adaptive. We integrate AI models into your eLearning platforms to provide personalized content recommendations, automated essay scoring, and intelligent tutoring systems that adapt to each learner's pace and style.",
    features: [
      "Adaptive Learning Paths",
      "AI-Based Assessment Grading",
      "Content Recommendation Engines",
      "Intelligent Tutoring Chatbots",
    ],
  },
  "web-app-development": {
    title: "Web & App Development",
    description: "High-performance, secure digital products built for scale.",
    details:
      "We build robust, scalable web and mobile applications using modern frameworks like React, Next.js, and Node.js. Our focus is on writing clean, maintainable code that ensures your application performs flawlessly under high load.",
    features: [
      "Full-Stack Web Development",
      "Cross-Platform Mobile Apps",
      "PWA Implementation",
      "API Design & Development",
    ],
  },
  "autonomous-ai-agents": {
    title: "Autonomous AI Agents",
    description:
      "Deploy intelligent agents that handle customer support, sales, and complex workflows 24/7.",
    details:
      "Move beyond simple chatbots. Our autonomous agents are capable of reasoning, planning, and executing complex tasks. Whether it's handling a refund process, scheduling meetings, or researching market data, these agents act as digital employees that never sleep.",
    features: [
      "Multi-Agent Orchestration",
      "Contextual Memory & Reasoning",
      "Tool Use & API Integration",
      "Human-in-the-Loop Workflows",
    ],
  },
  "workflow-automation": {
    title: "Workflow Automation",
    description:
      "Deep integration with n8n & Zapier to automate repetitive business processes.",
    details:
      "Stop wasting time on manual data entry and repetitive tasks. We design and implement sophisticated automation workflows that connect your disparate software tools, ensuring data flows seamlessly across your organization without human intervention.",
    features: [
      "Custom n8n Workflow Design",
      "Zapier & Integromat Integrations",
      "Webhook & API Orchestration",
      "Error Handling & Monitoring",
    ],
  },
  "intelligent-data-parsing": {
    title: "Intelligent Data Parsing",
    description:
      "Extract structured insights from unstructured documents like invoices and contracts.",
    details:
      "Data locked in PDFs and images is useless. We use advanced OCR and LLMs to extract, validate, and structure data from invoices, receipts, contracts, and forms with near-perfect accuracy, feeding it directly into your databases.",
    features: [
      "Invoice processing automation",
      "Contract entity extraction",
      "Resume/CV parsing",
      "Receipt digitization",
    ],
  },
  "cloud-migration-upgrades": {
    title: "Cloud Migration & Upgrades",
    description:
      "Smooth system upgrades and cloud migrations with zero data loss.",
    details:
      "Migrating legacy systems to the cloud is complex. We manage the entire process, ensuring security, scalability, and minimal downtime. Whether moving to AWS, Azure, or Google Cloud, we optimize your infrastructure for cost and performance.",
    features: [
      "Legacy to Cloud Migration",
      "Database Migration Strategies",
      "Serverless Architecture Setup",
      "Disaster Recovery Planning",
    ],
  },
};

export default function SolutionPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = solutionData[slug];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
        <Link href="/ai-automation" className="text-blue-400 hover:underline">
          Return to AI Automation
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/ai-automation"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Solutions
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-light max-w-3xl leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
              <p className="text-gray-300 leading-8 text-lg">{data.details}</p>
            </div>
          </motion.div>

          {/* Sidebar / Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1"
          >
            <div className="bg-linear-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 text-blue-300">
                Key Features
              </h3>
              <ul className="space-y-4">
                {data.features.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2
                      className="shrink-0 text-blue-500 mt-1"
                      size={18}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
