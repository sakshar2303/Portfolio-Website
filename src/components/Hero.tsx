"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowDown, Code, Terminal } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 border-b border-[#222] overflow-hidden">
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        {/* CLI style prompt / Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-8 font-mono text-sm"
        >
          <Terminal className="w-4 h-4 text-gray-500" />
          <span className="text-gray-500">~/{profile.name.toLowerCase().replace(" ", ".")}</span>
          <span className="text-gray-600">/</span>
          <span className="text-gray-300">status</span>
          <span className="flex h-2 w-2 relative ml-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-green-500 text-xs">Available</span>
        </motion.div>

        {/* Headline with word-by-word reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight leading-[1.05] mb-4 text-white"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-500 font-mono mb-8 tracking-tight"
        >
          {profile.role}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm md:text-base text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Technical CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#work"
            className="flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            View Architecture
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border border-[#333] text-gray-300 font-medium hover:bg-[#111] hover:text-white transition-colors w-full sm:w-auto justify-center"
          >
            <Code className="w-4 h-4" />
            GitHub
          </Link>
        </motion.div>

        {/* Quick stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-16 pt-8 border-t border-[#1a1a1a] flex gap-8 md:gap-16 flex-wrap"
        >
          {[
            { label: "OS Repos", value: "30+" },
            { label: "Stack", value: "Go · Python · TS" },
            { label: "Education", value: `BITS Pilani · ${profile.education.cgpa}` },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{item.label}</span>
              <span className="text-sm font-mono text-gray-300">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 font-mono text-xs"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
}
