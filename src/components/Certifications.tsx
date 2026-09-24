"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 border-b border-[#222] pb-4"
        >
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            05 — Certifications
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col p-6 bg-[#111] border border-[#222] hover:border-[#444] transition-colors relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              
              <div className="flex justify-between items-start gap-4 mb-2 relative z-10">
                <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <span className="text-[10px] font-mono text-gray-500 bg-[#0a0a0a] border border-[#222] px-2 py-1 uppercase shrink-0 whitespace-nowrap">
                  {cert.date}
                </span>
              </div>
              
              <div className="text-sm font-mono text-gray-500 relative z-10 mt-auto pt-4">
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
