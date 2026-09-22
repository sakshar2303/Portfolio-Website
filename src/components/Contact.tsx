"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5 bg-gradient-to-b from-transparent to-blue-900/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 text-blue-400">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Have an idea? <br className="hidden md:block" /> Let's build it.
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 text-balance">
            I'm always open to discussing product design work, new projects, or partnership opportunities.
          </p>
          
          <a 
            href={`mailto:${profile.email}`}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300"
          >
            <span>Say Hello</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
