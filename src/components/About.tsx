"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-blue-400 uppercase mb-6">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-200 text-balance mb-6">
                I engineer digital products that combine beautiful design with robust architecture.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                {profile.bio}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 content-start">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="text-4xl font-semibold text-white mb-2">3+</div>
                <div className="text-sm text-gray-500">Years of Experience</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="text-4xl font-semibold text-white mb-2">20+</div>
                <div className="text-sm text-gray-500">Projects Shipped</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
