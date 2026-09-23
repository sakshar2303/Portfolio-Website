"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight, Code, Hash } from "lucide-react";
import ArchitectureDiagram from "@/components/ui/ArchitectureDiagram";
import { useRef } from "react";

type ArchitectureType = "event-driven" | "rag-pipeline" | "redis-lock" | "mol-sim" | "standard-crud";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  live?: string;
  github?: string;
  featured?: boolean;
  architecture: ArchitectureType;
}

/* ─── Featured Project (full-width, parallax) ─── */
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      className="relative w-full border border-[#222] bg-[#111] overflow-hidden group"
    >
      {/* Project number watermark */}
      <div className="absolute top-6 right-8 text-[120px] md:text-[200px] font-bold text-[#151515] leading-none select-none pointer-events-none z-0">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row">
        {/* Left: content */}
        <div className="flex flex-col p-8 md:p-12 md:w-[50%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <Hash className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[10px] font-mono font-medium tracking-widest text-gray-500 uppercase">
              {project.category}
            </span>
            <span className="text-[10px] font-mono font-medium tracking-widest text-white uppercase px-2 py-0.5 border border-[#333] bg-[#0a0a0a]">
              Featured
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base max-w-lg"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.technologies.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className="text-[10px] font-mono px-3 py-1.5 bg-[#0a0a0a] border border-[#222] text-gray-400 hover:text-white hover:border-[#444] transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 mt-auto"
          >
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-mono font-semibold hover:bg-gray-200 transition-colors"
              >
                LIVE_DEMO
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono font-medium text-gray-500 hover:text-white transition-colors"
              >
                <Code className="w-3.5 h-3.5" />
                VIEW_SOURCE
              </a>
            )}
          </motion.div>
        </div>

        {/* Right: architecture diagram with parallax */}
        <motion.div style={{ y }} className="md:w-[50%] min-h-[280px] md:min-h-[360px]">
          <ArchitectureDiagram type={project.architecture} />
        </motion.div>
      </div>

      {/* Bottom scanline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />
    </motion.article>
  );
}

/* ─── Secondary Project (compact card) ─── */
function SecondaryProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col border border-[#222] bg-[#111] overflow-hidden group hover:border-[#444] transition-colors"
    >
      {/* Architecture diagram (top) */}
      <div className="h-[200px] relative">
        <ArchitectureDiagram type={project.architecture} />
      </div>

      {/* Content (bottom) */}
      <div className="flex flex-col p-6 md:p-8 flex-1 border-t border-[#222]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono font-medium tracking-widest text-gray-500 uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-gray-100 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 text-sm line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="text-[9px] font-mono px-2 py-1 bg-[#0a0a0a] border border-[#1a1a1a] text-gray-500"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[9px] font-mono px-2 py-1 text-gray-600">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a1a]">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-gray-400 hover:text-white transition-colors"
            >
              DEMO <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Code className="w-3 h-3" /> SOURCE
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Section ─── */
export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
              02 — Systems & Architecture
            </span>
          </div>
          {/* Animated underline that draws as you scroll */}
          <motion.div
            style={{ width: lineWidth }}
            className="h-px bg-gradient-to-r from-[#444] to-transparent"
          />
        </motion.div>

        {/* Featured projects — stacked full-width */}
        <div className="flex flex-col gap-8 mb-12">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project as Project} index={i} />
          ))}
        </div>

        {/* Divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">
            More_Systems
          </span>
          <div className="flex-1 h-px bg-[#222]" />
        </motion.div>

        {/* Secondary projects — 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondary.map((project, i) => (
            <SecondaryProject key={project.title} project={project as Project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
