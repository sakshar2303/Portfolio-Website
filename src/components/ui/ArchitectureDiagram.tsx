"use client";

import { motion } from "framer-motion";
import { GitMerge, Database, Server, Cpu, Globe, ArrowRight, ShieldCheck, Activity, LucideIcon } from "lucide-react";

type ArchitectureType = "event-driven" | "rag-pipeline" | "redis-lock" | "mol-sim" | "standard-crud";

interface Props {
  type?: ArchitectureType;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function ArchitectureDiagram({ type = "standard-crud" }: Props) {
  const Node = ({ icon: Icon, label, sub }: { icon: LucideIcon; label: string; sub: string }) => (
    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-4 border border-[#333] bg-[#0d0d0d] rounded-md min-w-[120px] relative overflow-hidden group">
      <div className="absolute inset-0 bg-[#fff] opacity-0 group-hover:opacity-[0.03] transition-opacity" />
      <Icon className="w-5 h-5 text-gray-400 mb-2" />
      <span className="text-xs font-mono text-gray-200">{label}</span>
      <span className="text-[10px] text-gray-600 mt-1">{sub}</span>
    </motion.div>
  );

  const Arrow = () => (
    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center px-2 text-[#444]">
      <ArrowRight className="w-4 h-4" />
    </motion.div>
  );

  const renderContent = () => {
    switch (type) {
      case "event-driven":
        return (
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex items-center justify-center w-full h-full p-4 overflow-hidden flex-wrap md:flex-nowrap gap-y-4">
            <Node icon={Activity} label="Ingestion" sub="Sub-20ms p99" />
            <Arrow />
            <Node icon={Server} label="NATS JetStream" sub="Event Bus" />
            <Arrow />
            <Node icon={Cpu} label="Go Backend" sub="Worker Pool" />
          </motion.div>
        );

      case "rag-pipeline":
        return (
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex items-center justify-center w-full h-full p-4 overflow-hidden flex-wrap md:flex-nowrap gap-y-4">
            <Node icon={Database} label="SEC EDGAR" sub="XBRL Source" />
            <Arrow />
            <Node icon={ShieldCheck} label="Vector DB" sub="Chunking" />
            <Arrow />
            <Node icon={Cpu} label="LLM Agent" sub="0% Hallucination" />
          </motion.div>
        );

      case "redis-lock":
        return (
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex items-center justify-center w-full h-full p-4 overflow-hidden flex-wrap md:flex-nowrap gap-y-4">
            <Node icon={Globe} label="Socket.io" sub="Concurrent Load" />
            <Arrow />
            <Node icon={Database} label="Redis" sub="SET NX EX" />
            <Arrow />
            <Node icon={Server} label="PostgreSQL" sub="Commit" />
          </motion.div>
        );

      case "mol-sim":
        return (
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex items-center justify-center w-full h-full p-4 overflow-hidden flex-wrap md:flex-nowrap gap-y-4">
            <Node icon={Activity} label="Mol* WebGL" sub="3D View" />
            <Arrow />
            <Node icon={Server} label="FastAPI" sub="Coordination" />
            <Arrow />
            <Node icon={Cpu} label="ESM-2" sub="Stability Score" />
          </motion.div>
        );

      case "standard-crud":
      default:
        return (
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex items-center justify-center w-full h-full p-4 overflow-hidden flex-wrap md:flex-nowrap gap-y-4">
            <Node icon={Globe} label="Next.js" sub="App Router" />
            <Arrow />
            <Node icon={Server} label="API Routes" sub="Auth & Logic" />
            <Arrow />
            <Node icon={Database} label="Prisma + Postgres" sub="Relational Data" />
          </motion.div>
        );
    }
  };

  return (
    <div className="w-full h-full min-h-[200px] flex flex-col bg-[#050505] border-l border-[#222] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 p-3 border-b border-[#222] flex items-center justify-between bg-[#0a0a0a] z-10">
        <div className="flex items-center gap-2">
          <GitMerge className="w-4 h-4 text-gray-500" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            System_Architecture
          </span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[#333]" />
          <div className="w-2 h-2 rounded-full bg-[#333]" />
          <div className="w-2 h-2 rounded-full bg-[#333]" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center pt-10 relative z-10">
        {renderContent()}
      </div>
      
      {/* Schematic Grid overlay with scrolling animation */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [0, 40] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-[-40px] pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
    </div>
  );
}
