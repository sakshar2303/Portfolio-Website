"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const stats = [
  { value: "30+", label: "Open-Source\nRepos" },
  { value: "4×", label: "Hackathon\nWinner" },
  { value: "9.0", label: "CGPA\n(BITS Pilani)" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12 border-b border-[#222] pb-4"
        >
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            01 — System Information
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-white">
              {profile.tagline}
            </h2>
            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>{profile.bio}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex flex-col gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="flex items-center justify-between p-6 bg-[#111] border border-[#222] hover:border-[#444] transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <div className="text-sm font-mono text-gray-500 whitespace-pre-line leading-snug uppercase relative z-10">
                  {stat.label}
                </div>
                <div className="text-3xl font-bold text-white tracking-tight relative z-10">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
