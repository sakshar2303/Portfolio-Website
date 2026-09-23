"use client";

import { skills } from "@/data/skills";

const categoryMeta: Record<string, { label: string; number: string }> = {
  frontend: { label: "Client Interfaces", number: "01" },
  backend: { label: "Core Systems", number: "02" },
  tools: { label: "Infrastructure & Ops", number: "03" },
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12 border-b border-[#222] pb-4">
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            03 — Technology Stack
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(([category, items], catIndex) => {
            const meta = categoryMeta[category] || {
              label: category,
              number: String(catIndex + 1).padStart(2, "0"),
            };
            return (
              <div key={category} className="flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-gray-600 bg-[#111] border border-[#222] px-2 py-1">
                    {meta.number}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
                    {meta.label}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-3 bg-[#0a0a0a] border border-[#222] text-sm text-gray-400 font-mono hover:border-gray-500 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
