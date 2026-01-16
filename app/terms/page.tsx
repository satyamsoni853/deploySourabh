"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
            Terms and Conditions
          </h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to CloudFire IIT Service. By accessing our website and
                using our services, you agree to comply with and be bound by the
                following terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Services
              </h2>
              <p>
                We provide web development, design, and digital solutions. All
                services are subject to availability and acceptance of your
                order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Intellectual Property
              </h2>
              <p>
                All content materials and code provided in the course of our
                services remain the property of CloudFire IIT Service until full
                payment is received.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Limitation of Liability
              </h2>
              <p>
                We shall not be liable for any indirect, special, or
                consequential damages arising out of or in connection with the
                use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at support@cloudfire.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
