"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { X, Menu, Terminal } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-[#222] py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold font-mono tracking-widest text-white uppercase"
          >
            <Terminal className="w-4 h-4" />
            {profile.name}
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-[#111] border border-[#222] p-1 rounded-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-white bg-[#222]"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="w-px h-4 bg-[#333] mx-2" />
            <Link
              href="#contact"
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-gray-200 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-4 w-full px-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex justify-center text-xl font-mono uppercase tracking-widest text-gray-400 hover:text-white hover:bg-[#111] border border-transparent hover:border-[#222] transition-colors py-4 w-full"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="w-full mt-4"
              >
                <Link
                  href="#contact"
                  onClick={handleNavClick}
                  className="flex justify-center py-4 text-xl font-mono uppercase tracking-widest text-black bg-white w-full"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
