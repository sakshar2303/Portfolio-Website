"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-blue-400 uppercase mb-12">Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map(([category, items], i) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-medium text-white capitalize mb-6 flex items-center gap-2">
                  {category}
                  <span className="h-[1px] flex-1 bg-white/10 ml-2 block" />
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
