"use client";

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

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-12 border-b border-[#222] pb-4">
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            05 — System Initialization
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
              Initiate a connection.
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
              Ready to architect something scalable? My inbox is always open for new opportunities, engineering discussions, or systems challenges.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-6 bg-[#111] border border-[#222] flex flex-col gap-4 hover:border-[#444] transition-colors">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  Direct_Access
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-lg md:text-xl font-medium text-white hover:text-gray-300 transition-colors"
                >
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
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

            <div className="flex flex-col sm:flex-row gap-4">
              {[
                { name: "GitHub", url: profile.github },
                { name: "LinkedIn", url: profile.linkedin },
                { name: "Twitter", url: profile.twitter },
              ]
                .filter((s) => s.url)
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between px-5 py-3 bg-[#111] border border-[#222] text-sm font-mono text-gray-400 hover:text-white hover:border-[#444] transition-colors"
                  >
                    {social.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-4 flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full"
            >
              Ping System
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
