"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight, Code } from "lucide-react";
import ArchitectureDiagram from "@/components/ui/ArchitectureDiagram";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  live?: string;
  github?: string;
  featured?: boolean;
  architecture: "event-driven" | "rag-pipeline" | "redis-lock" | "mol-sim" | "standard-crud";
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative tech-panel tech-panel-hover flex flex-col ${
        project.featured ? "md:flex-row md:col-span-2" : "md:flex-col"
      }`}
    >
      {/* Content */}
      <div className={`flex flex-col p-8 md:p-10 ${project.featured ? "md:w-[45%]" : ""}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono font-medium tracking-wider text-gray-500 uppercase">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-mono font-medium tracking-wider text-[#ededed] uppercase px-2 py-0.5 border border-[#333] bg-[#111]">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-1 bg-[#151515] border border-[#222] text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-medium text-gray-300 hover:text-white transition-colors"
            >
              [LIVE_DEMO]
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-medium text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              SOURCE
            </a>
          )}
        </div>
      </div>

      {/* Architecture Visual */}
      <div className={`relative ${project.featured ? "md:w-[55%]" : "mt-auto h-[220px]"}`}>
        <ArchitectureDiagram type={project.architecture} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 relative border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12 border-b border-[#222] pb-4">
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
            02 — Systems & Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project as Project} />
          ))}
        </div>
      </div>
    </section>
  );
}
