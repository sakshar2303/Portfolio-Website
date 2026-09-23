"use client";

import { profile } from "@/data/profile";
import { ArrowDown, Code, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 border-b border-[#222]">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
        {/* CLI style prompt / Status */}
        <div className="flex items-center gap-3 mb-8 font-mono text-sm">
          <Terminal className="w-4 h-4 text-gray-500" />
          <span className="text-gray-500">~/{profile.name.toLowerCase()}</span>
          <span className="text-gray-600">/</span>
          <span className="text-gray-300">status</span>
          <span className="flex h-2 w-2 relative ml-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-green-500">Available</span>
        </div>

        {/* Stark Typographic Headline */}
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tight leading-[1.05] mb-6 text-white">
          Building systems that <br className="hidden md:block" />
          <span className="text-gray-500">scale & never fail.</span>
        </h1>

        {/* Bio */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed font-mono">
          {profile.bio}
        </p>

        {/* Technical CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 border-l-2 border-[#333] pl-4">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-12 hidden md:flex items-center gap-3 text-gray-500 font-mono text-xs">
        <ArrowDown className="w-4 h-4 animate-bounce" />
        <span>SCROLL_DOWN</span>
      </div>
    </section>
  );
}
