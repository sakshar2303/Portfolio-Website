"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight, Code, Hash, ExternalLink } from "lucide-react";
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

/* ─── Featured Project (full-width, parallax architecture) ─── */
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const archY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-20, 0, 0, 20]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity: sectionOpacity }}
      className="relative w-full overflow-hidden"
    >
      {/* Outer border that draws on scroll */}
      <div className="border border-[#222] bg-[#0e0e0e] hover:border-[#333] transition-colors duration-500">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#1a1a1a] bg-[#0a0a0a]">
          <div className="flex items-center gap-3">
            <Hash className="w-3 h-3 text-gray-600" />
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
              {project.category}
            </span>
            <span className="text-[9px] font-mono text-white uppercase tracking-widest px-2 py-0.5 border border-[#333] bg-[#111]">
              Featured
            </span>
          </div>
          <span className="text-[80px] md:text-[120px] font-bold text-[#111] leading-none select-none absolute right-4 -top-4 pointer-events-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col md:flex-row relative">
          {/* Clickable Overlay */}
          <a href={project.github || project.live || "#"} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
          
          {/* Left: content with subtle horizontal parallax */}
          <motion.div style={{ x: contentX }} className="flex flex-col p-8 md:p-12 md:w-[48%] relative z-20 pointer-events-none">
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 leading-relaxed mb-8 text-sm md:text-[15px] max-w-lg"
            >
              {project.description}
            </motion.p>

            {/* Tech tags with stagger */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.04 } },
              }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.technologies.map((tech: string) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    show: { opacity: 1, y: 0 },
                  }}
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
              transition={{ delay: 0.4 }}
              className="flex items-center gap-5 mt-auto pointer-events-auto"
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
          </motion.div>

          {/* Right: architecture diagram with vertical parallax */}
          <motion.div
            style={{ y: archY }}
            className="md:w-[52%] h-[280px] md:h-auto md:min-h-[360px] border-t md:border-t-0 md:border-l border-[#1a1a1a]"
          >
            <ArchitectureDiagram type={project.architecture} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Secondary Project (compact card with hover reveal) ─── */
function SecondaryProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col border border-[#222] bg-[#0e0e0e] overflow-hidden group hover:border-[#444] transition-all duration-300 w-[300px] md:w-[380px] shrink-0"
    >
      {/* Clickable Overlay */}
      <a href={project.github || project.live || "#"} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />

      {/* Architecture diagram */}
      <div className="h-[180px] relative border-b border-[#1a1a1a]">
        <ArchitectureDiagram type={project.architecture} />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 flex-1">
        <span className="text-[9px] font-mono font-medium tracking-[0.2em] text-gray-600 uppercase mb-3">
          {project.category}
        </span>

        <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
          {project.title}
        </h3>

        <p className="text-gray-500 leading-relaxed text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <span key={tech} className="text-[9px] font-mono px-2 py-1 bg-[#0a0a0a] border border-[#1a1a1a] text-gray-500">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[9px] font-mono px-2 py-1 text-gray-600">+{project.technologies.length - 4}</span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a1a] relative z-20">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 hover:text-white transition-colors">
              <ExternalLink className="w-3 h-3" /> DEMO
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 hover:text-gray-300 transition-colors">
              <Code className="w-3 h-3" /> SOURCE
            </a>
          )}
        </div>
      </div>

      {/* Bottom accent line that widens on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-px bg-white transition-all duration-500" />
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
  const lineWidth = useTransform(scrollYProgress, [0, 0.25], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header with animated underline */}
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
          <motion.div style={{ width: lineWidth }} className="h-px bg-gradient-to-r from-[#444] to-transparent" />
        </motion.div>

        {/* Featured: stacked full-width */}
        <div className="flex flex-col gap-10 mb-16">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project as Project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em] whitespace-nowrap">
            More_Systems
          </span>
          <div className="flex-1 h-px bg-[#1a1a1a]" />
        </motion.div>

        {/* Secondary: Horizontal Carousel (Infinite Marquee) */}
        <div className="relative w-full overflow-hidden -mx-6 md:-mx-12 py-8">
          {/* Fading edges for the carousel */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {/* First Set */}
            <div className="flex gap-12 pr-12">
              {secondary.map((project, i) => (
                <SecondaryProject key={`a-${project.title}`} project={project as Project} index={i} />
              ))}
            </div>
            {/* Second Set */}
            <div className="flex gap-12 pr-12">
              {secondary.map((project, i) => (
                <SecondaryProject key={`b-${project.title}`} project={project as Project} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
