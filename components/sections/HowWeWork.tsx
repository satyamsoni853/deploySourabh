"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by understanding your business, your audience, and your goals. We dig deep to find the root of the challenge.",
    color: "text-blue-400",
    border: "border-blue-400",
  },
  {
    num: "02",
    title: "Strategy & Design",
    desc: "We craft a roadmap and create visual prototypes. You will see what we are building before a single line of code is written.",
    color: "text-[#368ACA]",
    border: "border-[#368ACA]",
  },
  {
    num: "03",
    title: "Development",
    desc: "Our wizards write clean, scalable code. We build the engine that powers your digital presence, ensuring speed and security.",
    color: "text-pink-400",
    border: "border-pink-400",
  },
  {
    num: "04",
    title: "Testing & Launch",
    desc: "We rigorously test every feature. Once everything is perfect, we hit the launch button and watch your business soar.",
    color: "text-green-400",
    border: "border-green-400",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 lg:px-20 text-white relative z-10 w-full flex flex-col justify-center min-h-[50vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-pink-500 to-orange-500 mb-6">
          How We Work
        </h2>
        <p className="text-lg md:text-xl text-gold leading-relaxed">
          Transparency is key. Our process is designed to keep you informed,
          involved, and confident every step of the way.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative w-full">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 via-[#368ACA] to-green-500 -translate-x-1/2 opacity-30" />

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number Bubble */}
              <div
                className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border-2 ${step.border} flex items-center justify-center font-bold text-2xl md:text-3xl ${step.color} shadow-[0_0_30px_rgba(255,255,255,0.1)] shrink-0`}
              >
                {step.num}
              </div>

              {/* Content Card */}
              <div className="flex-1 text-center md:text-left p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-[#BF953F]/50 hover:shadow-[0_0_20px_rgba(191,149,63,0.1)] transition-all duration-300 w-full">
                <h3 className={`text-2xl font-bold mb-4 ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
