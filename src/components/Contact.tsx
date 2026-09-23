"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background architectural grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 border-b border-[#222] pb-4"
        >
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            05 — System Initialization
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-8">
              Initiate a connection.
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed text-base md:text-lg">
              Ready to architect something scalable? My inbox is always open for new opportunities, engineering discussions, or systems challenges.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-x-full group-hover:translate-x-full" />
              <div className="p-6 md:p-8 bg-[#111] border border-[#222] flex flex-col gap-6 group-hover:border-[#444] transition-colors relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    Direct_Access
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg md:text-xl lg:text-2xl font-semibold text-white hover:text-gray-300 transition-colors break-all"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#0a0a0a] border border-[#222] text-gray-400 hover:text-white hover:border-[#444] transition-all"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              {[
                { name: "GitHub", url: profile.github },
                { name: "LinkedIn", url: profile.linkedin },
                { name: "Twitter", url: profile.twitter },
              ]
                .filter((s) => s.url)
                .map((social) => (
                  <motion.a
                    variants={itemVariants}
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between px-6 py-4 bg-[#111] border border-[#222] text-sm font-mono text-gray-400 hover:text-white hover:border-[#444] hover:bg-[#151515] transition-colors group"
                  >
                    {social.name}
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
            </div>

            <motion.a
              variants={itemVariants}
              href={`mailto:${profile.email}`}
              className="mt-2 flex items-center justify-center gap-3 px-8 py-5 bg-white text-black text-sm font-mono font-bold hover:bg-gray-200 transition-colors w-full group"
            >
              PING_SYSTEM
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
