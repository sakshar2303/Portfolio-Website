"use client";

import { motion } from "framer-motion";
import { Code2, Star, GitFork, Users, Activity, Terminal } from "lucide-react";

interface TelemetryData {
  followers: number;
  repos: number;
  stars: number;
  forks: number;
}

export default function TelemetryView({ data }: { data: TelemetryData }) {
  const stats = [
    { label: "Public Repos", value: data.repos, icon: Terminal, color: "text-blue-400" },
    { label: "Total Stars", value: data.stars, icon: Star, color: "text-yellow-400" },
    { label: "Total Forks", value: data.forks, icon: GitFork, color: "text-green-400" },
    { label: "Followers", value: data.followers, icon: Users, color: "text-purple-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="py-16 relative border-b border-[#222] bg-[#050505] overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-4 h-4 text-green-500 animate-pulse" />
              <span className="text-xs font-mono font-medium tracking-widest text-green-500/80 uppercase">
                System Telemetry
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <Code2 className="w-6 h-6 md:w-8 md:h-8" />
              Live GitHub Metrics
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222]">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Connection Active</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="p-5 md:p-6 bg-[#0a0a0a] border border-[#222] hover:border-[#444] transition-colors relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon className={`w-5 h-5 md:w-6 md:h-6 mb-4 ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
