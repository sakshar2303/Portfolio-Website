"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm font-medium tracking-widest text-blue-400 uppercase">Selected Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden ${project.featured ? 'md:col-span-2 md:flex-row gap-8' : 'gap-6'}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className={`flex flex-col justify-center ${project.featured ? 'md:w-1/2' : ''}`}>
                  <span className="text-xs font-medium text-gray-500 mb-2">{project.category}</span>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                        View Live <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" /> Source
                      </a>
                    )}
                  </div>
                </div>
                
                <div className={`relative rounded-xl overflow-hidden border border-white/5 bg-white/5 aspect-video ${project.featured ? 'md:w-1/2 mt-0' : 'mt-4'}`}>
                  {/* Using a solid color placeholder if image isn't available, but we'd normally use Next/Image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                    <span className="text-white/20 font-medium tracking-widest uppercase">Preview</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
