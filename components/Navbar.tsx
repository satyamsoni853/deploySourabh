"use client";

import NextImage from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/how-we-work" },
  { name: "AI Automation", href: "/ai-automation" },
  { name: "Work", href: "/delivered-projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group z-50 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <NextImage
                src="/ezgif.com-speed.gif"
                alt="CloudFire IIT"
                width={800}
                height={500}
                className="h-20 md:h-28 w-auto object-contain"
                priority
              />
            </motion.div>
            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-linear-to-r from-blue-400 to-[#368ACA] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Links */}
          <motion.div
            className="hidden lg:flex items-center space-x-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group overflow-hidden rounded-full text-gray-300 hover:text-white"
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full"
                    layoutId="navbar-hover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    suppressHydrationWarning
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#BF953F] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-full group-hover:h-px group-hover:rounded-none group-hover:bg-linear-to-r group-hover:from-transparent group-hover:via-[#BF953F] group-hover:to-transparent" />
                </Link>
              </motion.div>
            ))}

            <motion.div variants={linkVariants} className="pl-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gold-gradient text-black text-sm font-bold rounded-full shadow-lg shadow-[#BF953F]/20 hover:shadow-[#BF953F]/40 transition-all duration-300 border border-white/10 tracking-wide font-heading"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full transition-colors text-white hover:bg-white/10"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-start justify-start pt-32 px-6 space-y-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                className="w-full"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full border-b border-[#BF953F]/40 pb-4 text-2xl font-bold text-gray-300 hover:text-white transition-all duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
