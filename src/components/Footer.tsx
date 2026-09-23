"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-[#222] bg-[#050505] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest text-center md:text-left">
            <span>© {year} {profile.name}</span>
            <span className="hidden md:block w-1 h-1 bg-[#333]" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              All Systems Nominal
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="group text-xs font-mono text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all">↑</span>
              [ Return_To_Top ]
              <span className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all">↑</span>
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
