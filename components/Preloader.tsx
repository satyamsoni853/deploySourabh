"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const textLine1 = "Welcome to Our";
const textLine2 = "Space World";

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time between each letter appearing
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(10px)",
    transition: { duration: 0.8 },
  },
};

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total animation time = delay (0.3) + (total letters * 0.08) + hold time
    // Approx len = 14 + 11 = 25 chars. 25 * 0.08 = 2 seconds + delay.
    // Let's give it about 3.5 seconds total to read.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-2">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-[#368ACA] to-pink-500">
                {textLine1.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
              {/* Add a simpler staggered delay for the second line so it starts after line 1 */}
              {textLine2.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  // Override transition to wait for first line roughly
                  transition={{ delay: 1.5 + index * 0.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
