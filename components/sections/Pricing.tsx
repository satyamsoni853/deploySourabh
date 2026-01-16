"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const countries = [
  { code: "US", name: "United States", currency: "$", rate: 1 },
  { code: "IN", name: "India", currency: "₹", rate: 83 },
  { code: "UK", name: "United Kingdom", currency: "£", rate: 0.79 },
  { code: "EU", name: "Europe", currency: "€", rate: 0.92 },
];

const plans = [
  {
    name: "Startup",
    basePrice: 999,
    features: [
      "5 Page Website",
      "Basic SEO",
      "Mobile Responsive",
      "1 Month Support",
      "Contact Form",
    ],
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Business",
    basePrice: 2499,
    popular: true,
    features: [
      "10 Page Website",
      "Advanced SEO",
      "CMS Integration",
      "Speed Optimization",
      "3 Months Support",
    ],
    color: "from-[#368ACA] to-[#368ACA]",
  },
  {
    name: "Enterprise",
    basePrice: 4999,
    features: [
      "Custom Web App",
      "Database Integration",
      "User Auth",
      "Priority Support",
      "Cloud Hosting Setup",
    ],
    color: "from-pink-400 to-red-600",
  },
];

export default function Pricing() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const formatPrice = (price: number) => {
    const converted = Math.round(price * selectedCountry.rate);
    return `${selectedCountry.currency}${converted.toLocaleString()}`;
  };

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 lg:px-20 text-white relative z-10 w-full flex flex-col justify-center min-h-[50vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA]">
          Transparent Pricing
        </h2>
        <p className="text-lg md:text-xl text-gold mb-6 md:mb-8">
          Choose a plan that fits your needs. No hidden fees.
        </p>

        {/* Country Selector */}
        <div className="inline-flex items-center gap-2 md:gap-4 bg-white/5 p-2 rounded-full border border-white/10 px-4 md:px-6">
          <span className="text-gray-300 text-xs md:text-sm">
            Select Your Region:
          </span>
          <select
            value={selectedCountry.code}
            onChange={(e) => {
              const country = countries.find((c) => c.code === e.target.value);
              if (country) setSelectedCountry(country);
            }}
            className="bg-transparent text-white font-bold outline-hidden cursor-pointer text-sm md:text-base"
          >
            {countries.map((c) => (
              <option
                key={c.code}
                value={c.code}
                className="bg-black text-white"
              >
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-6 md:p-8 rounded-3xl bg-zinc-900/50 border ${
              plan.popular
                ? "border-[#368ACA] shadow-[#368ACA]/20 shadow-2xl"
                : "border-white/10"
            } backdrop-blur-md flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#368ACA] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6 md:mb-8">
              <span className="text-3xl md:text-4xl font-bold">
                {formatPrice(plan.basePrice)}
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <div
                    className={`p-1 rounded-full bg-linear-to-br ${plan.color}`}
                  >
                    <Check size={12} className="text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`/contact?plan=${encodeURIComponent(plan.name)}`}
              className="block w-full"
            >
              <button
                className={`w-full py-3 rounded-xl font-bold text-white transition-all hover:scale-105 bg-linear-to-r ${plan.color} shadow-lg`}
              >
                Get Started
              </button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Doubt/Inquiry Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-16 md:mt-24 text-center px-4"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Still have doubts?
        </h3>
        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Not sure which plan is right for you? Drop us a line and we&apos;ll
          help you decide.
        </p>

        <form className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <textarea
            rows={3}
            placeholder="What's on your mind?"
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors mb-4 resize-none"
          ></textarea>
          <button className="w-full py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
            Ask an Expert
          </button>
        </form>
      </motion.div>
    </section>
  );
}
