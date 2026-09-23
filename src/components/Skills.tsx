"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 border-b border-[#222] pb-4"
        >
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            03 — Technology Stack
          </span>
        </motion.div>

        <div className="space-y-12">
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[10px] font-mono text-gray-600 bg-[#111] border border-[#222] px-2 py-1">
                  {String(catIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-[#1a1a1a]" />
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04 },
                  },
                }}
                className="flex flex-wrap gap-2"
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    className="px-4 py-2.5 bg-[#0a0a0a] border border-[#222] text-sm text-gray-400 font-mono hover:border-[#444] hover:text-white transition-all duration-200 cursor-default relative overflow-hidden group"
                  >
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
