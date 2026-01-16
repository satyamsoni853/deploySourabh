"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

interface ContactProps {
  selectedPlan?: string | null;
}

export default function Contact({ selectedPlan }: ContactProps) {
  return (
    <section id="contact" className="py-20 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-24 items-start md:items-center">
          {/* Contact Info */}
          <div className="space-y-8 md:space-y-10">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA] mb-4 md:mb-6">
                Let&apos;s Initiate Launch
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Ready to take your digital presence to the next dimension? Our
                ground control team is standing by.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="p-3 md:p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">
                    Email Us
                  </h4>
                  <div className="flex flex-col">
                    <p className="text-gray-400 group-hover:text-blue-300 transition-colors text-sm md:text-base">
                      info@cloudfireitservices.com
                    </p>
                    <p className="text-gray-400 group-hover:text-blue-300 transition-colors text-xs md:text-sm mt-1">
                      hr@cloudfireitservices.com
                      <span className="text-gray-500 block text-xs">
                        (Media/Hiring)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="p-3 md:p-4 bg-[#368ACA]/10 border border-[#368ACA]/20 rounded-2xl text-[#368ACA] group-hover:bg-[#368ACA] group-hover:text-white transition-all duration-300">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">
                    Call Us
                  </h4>
                  <p className="text-gray-400 group-hover:text-[#368ACA] transition-colors text-sm md:text-base">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="p-3 md:p-4 bg-pink-500/10 border border-pink-500/20 rounded-2xl text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">
                    Visit HQ
                  </h4>
                  <p className="text-gray-400 group-hover:text-pink-300 transition-colors text-sm md:text-base">
                    123 Space Innovation Way,
                    <br />
                    Tech City, TC 90210
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/10 hover:border-[#BF953F]/50 hover:shadow-[0_0_20px_rgba(191,149,63,0.1)] transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Interested In
              </label>
              <select
                defaultValue={selectedPlan || "General Inquiry"}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer text-sm md:text-base"
              >
                <option value="General Inquiry" className="bg-zinc-900">
                  General Inquiry
                </option>
                <option value="Startup" className="bg-zinc-900">
                  Startup Plan
                </option>
                <option value="Business" className="bg-zinc-900">
                  Business Plan
                </option>
                <option value="Enterprise" className="bg-zinc-900">
                  Enterprise Plan
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm md:text-base"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-linear-to-r from-blue-600 to-[#368ACA] text-white font-bold py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-shadow text-sm md:text-base"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
