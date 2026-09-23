"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 border-b border-[#222] pb-4"
        >
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            04 — Engineering History
          </span>
        </motion.div>

        <div className="max-w-3xl relative">
          {/* Animated vertical connecting line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[3px] md:left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-[#444] via-[#222] to-transparent z-0"
          />

          <div className="flex flex-col gap-12 relative z-10">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-6 md:gap-8"
              >
                <div className="flex flex-col items-center pt-1.5 shrink-0">
                  <div className="w-2 h-2 md:w-6 md:h-6 bg-[#0a0a0a] border border-[#444] flex items-center justify-center">
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-white" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 bg-[#111] border border-[#222] hover:border-[#444] transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                        {job.position}
                        <span className="w-0 overflow-hidden group-hover:w-auto text-[#444] font-mono text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                          {"// INIT"}
                        </span>
                      </h3>
                      <span className="text-gray-400 text-sm">{job.company}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 bg-[#0a0a0a] border border-[#222] px-2 py-1 uppercase shrink-0">
                      {job.date}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-1 bg-[#0a0a0a] border border-[#222] text-gray-500 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
