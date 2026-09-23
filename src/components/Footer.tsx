"use client";

import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#222] bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span>© {year} {profile.name}</span>
            <span className="w-1 h-1 bg-[#333]" />
            <span>All Systems Nominal</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-xs font-mono text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
            >
              [ Return_To_Top ]
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
