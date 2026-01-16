"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you build custom designs or use templates?",
    answer:
      "We primarily build custom designs tailored to your brand identity. However, if you're on a tight budget or deadline, we can optimize premium templates to suit your needs.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website typically takes 2-4 weeks. More complex projects with custom functionality or web apps can take 6-12 weeks depending on the scope.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! We adopt a mobile-first approach, ensuring your site looks and performs perfectly on smartphones, tablets, laptops, and desktops.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "We can guide you in purchasing the best domain and hosting plan. For our Enterprise clients, we offer full server setup and management.",
  },
  {
    question: "What happens after the website is launched?",
    answer:
      "We offer complimentary support for 30 days after launch. We also have monthly maintenance packages to keep your site secure, updated, and fast.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gold">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl bg-zinc-900/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-blue-400" />
                ) : (
                  <Plus className="text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
