"use client";

import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12 border-b border-[#222] pb-4">
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            04 — Engineering History
          </span>
        </div>

        <div className="max-w-3xl flex flex-col gap-6">
          {experience.map((job, i) => (
            <div
              key={i}
              className="flex flex-col p-6 md:p-8 bg-[#111] border border-[#222] hover:border-[#444] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {job.position}
                  </h3>
                  <span className="text-gray-400 text-sm">{job.company}</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 bg-[#0a0a0a] border border-[#222] px-2 py-1 uppercase shrink-0">
                  {job.date}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-1 bg-[#0a0a0a] border border-[#222] text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
