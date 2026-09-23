"use client";

import { profile } from "@/data/profile";

const stats = [
  { value: "3+", label: "Years of\nEngineering" },
  { value: "20+", label: "Systems\nDeployed" },
  { value: "10+", label: "Core\nTechnologies" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12 border-b border-[#222] pb-4">
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            01 — System Information
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-white">
              I build high-performance systems with zero compromises.
            </h2>
            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>{profile.bio}</p>
              <p>
                My focus is on concurrent, resilient, and deeply technical backend architectures, combined with sharp, functional interfaces. I believe in zero-downtime, predictable state, and type safety.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between p-6 bg-[#111] border border-[#222]"
              >
                <div className="text-sm font-mono text-gray-500 whitespace-pre-line leading-snug uppercase">
                  {stat.label}
                </div>
                <div className="text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
