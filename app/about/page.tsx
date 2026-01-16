"use client";

import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { Users, Target, Eye, Heart, Award, Zap, X } from "lucide-react";
import { useState } from "react";

import Awards from "@/components/sections/Awards";
import Footer from "@/components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof TEAM_MEMBERS)[0] | null
  >(null);

  return (
    <div className="min-h-screen pt-20 md:pt-24 px-4 md:px-12 lg:px-20 text-white overflow-hidden relative">
      {/* Intro Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-[#368ACA] to-pink-500 mb-6">
          About CloudFire IIT
        </h1>
        <p className="text-base md:text-xl text-gray-300 leading-relaxed">
          At CloudFire IIT, we bridge the gap between imagination and
          technology. Born from a passion for innovation, we deliver
          cutting-edge IT solutions that empower businesses to thrive in the
          digital era. We are not just service providers; we are your strategic
          partners in growth.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="grid md:grid-cols-2 gap-8 mb-24"
      >
        <motion.div
          variants={fadeIn}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-gray-300 text-lg">
            To empower organizations with scalable, secure, and intelligent
            technology solutions. We strive to simplify complexity and drive
            digital transformation that creates lasting value for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-[#368ACA]/20 text-[#368ACA]">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
          </div>
          <p className="text-gray-300 text-lg">
            To be the global catalyst for innovation, recognized for our
            excellence, integrity, and ability to turn challenges into
            opportunities through the power of code and creativity.
          </p>
        </motion.div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mb-24"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Core Values
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Heart size={28} />,
              title: "Integrity",
              desc: "We build trust through honesty and transparency in every action.",
              color: "text-red-400",
            },
            {
              icon: <Zap size={28} />,
              title: "Innovation",
              desc: "We constantly push boundaries to find better, smarter solutions.",
              color: "text-yellow-400",
            },
            {
              icon: <Users size={28} />,
              title: "Collaboration",
              desc: "We believe in the power of teamwork and shared success.",
              color: "text-green-400",
            },
            {
              icon: <Award size={28} />,
              title: "Excellence",
              desc: "We promote the highest standards in quality and performance.",
              color: "text-blue-400",
            },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`mb-4 ${val.color}`}>{val.icon}</div>
              <h3 className="text-xl font-bold mb-2">{val.title}</h3>
              <p className="text-gray-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Awards Section */}
      <Awards />

      {/* Team Introduction */}
      <motion.div
        initial="hidden"
        whileInView="visible" // Corrected from whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mb-20 text-center"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Meet the Minds
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeIn}
              layoutId={`card-${member.id}`}
              onClick={() => setSelectedMember(member)}
              className="group relative overflow-hidden rounded-xl w-full max-w-xs aspect-3/4 bg-white/5 border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0">
                {member.image ? (
                  <div className="relative w-full h-full">
                    <NextImage
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">
                    <Users size={64} opacity={0.5} />
                  </div>
                )}
              </div>

              {/* Overlay with Name/Role */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-blue-400 font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Click for details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />

      {/* Team Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedMember.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-2xl bg-[#0f1014] border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left: Image */}
              <div className="w-full md:w-2/5 relative aspect-3/4 md:aspect-auto md:h-auto shrink-0">
                {selectedMember.image ? (
                  <NextImage
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">
                    <Users size={64} opacity={0.5} />
                  </div>
                )}
              </div>

              {/* Right: Content */}
              <div className="p-8 md:w-3/5 flex flex-col justify-center gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-blue-400 text-lg font-medium">
                    {selectedMember.role}
                  </p>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>{selectedMember.bio}</p>
                  <p className="italic text-gray-400">
                    &quot;{selectedMember.quote}&quot;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  {/* Study */}
                  {selectedMember.study && (
                    <div className="flex gap-2 text-sm">
                      <span className="text-gray-400 font-semibold min-w-[80px]">
                        Education:
                      </span>
                      <span className="text-gray-200">
                        {selectedMember.study}
                      </span>
                    </div>
                  )}

                  {/* Expertise */}
                  <div className="flex gap-2 text-sm">
                    <span className="text-gray-400 font-semibold min-w-[80px]">
                      Expertise:
                    </span>
                    <span className="text-gray-200">
                      {selectedMember.expertise}
                    </span>
                  </div>

                  {/* External Link */}
                  {selectedMember.link && (
                    <div className="pt-2">
                      <a
                        href={selectedMember.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        View Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Sourabh Singh Rajput",
    role: "Founder & CEO",
    image: "/team/owner.jpg",
    bio: "Visionary leader with a passion for transforming ideas into digital reality. With over 7 years of experience in software architecture and business strategy, Sourabh guides CloudFire IIT towards innovation and excellence. He believes in building not just products, but lasting legacies.",
    quote: "Technology is best when it brings people together.",
    expertise: "7+ years of experience in IT Consulting",
    study: "B.Tech in Computer Science and Engineering",

    link: "https://www.linkedin.com/in/sourabhsinghrajput/",
  },
  {
    id: 2,
    name: "Satyam Soni",
    role: "Frontend Developer",
    image: "/team/member2.jpg",
    bio: "Passionate Frontend Developer creating intuitive and dynamic user experiences. Specializing in modern web technologies to build responsive and performant applications.",
    quote: "Code is poetry written for machines.",
    expertise: "Frontend Development",
    link: "https://satyam-portfolio-nextjs.vercel.app/",
  },
];
