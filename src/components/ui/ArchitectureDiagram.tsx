"use client";

import { motion, Variants } from "framer-motion";
import { GitMerge, Database, Server, Cpu, Globe, ArrowRight, ShieldCheck, Activity, LucideIcon } from "lucide-react";

type ArchitectureType = "event-driven" | "rag-pipeline" | "redis-lock" | "mol-sim" | "standard-crud";

interface Props {
  type?: ArchitectureType;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ArchitectureDiagram({ type = "standard-crud" }: Props) {
  const Node = ({ icon: Icon, label, sub }: { icon: LucideIcon; label: string; sub: string }) => (
    <motion.div
      variants={nodeVariants}
      className="flex flex-col items-center justify-center p-3 md:p-4 border border-[#333] bg-[#0d0d0d] min-w-[90px] md:min-w-[120px] relative group hover:border-[#555] transition-colors"
    >
      <Icon className="w-5 h-5 text-gray-400 mb-2 group-hover:text-white transition-colors" />
      <span className="text-[10px] md:text-xs font-mono text-gray-200 text-center">{label}</span>
      <span className="text-[9px] md:text-[10px] text-gray-600 mt-1 text-center">{sub}</span>
    </motion.div>
  );

  const Connector = () => (
    <motion.div variants={lineVariants} className="origin-left flex items-center px-1 md:px-3">
      <div className="w-6 md:w-10 h-px bg-[#444] relative">
        <ArrowRight className="w-3 h-3 text-[#555] absolute -right-1.5 -top-1.5" />
      </div>
    </motion.div>
  );

  const architectures: Record<ArchitectureType, { nodes: { icon: LucideIcon; label: string; sub: string }[] }> = {
    "event-driven": {
      nodes: [
        { icon: Activity, label: "Ingestion", sub: "Sub-20ms p99" },
        { icon: Server, label: "NATS JetStream", sub: "Event Bus" },
        { icon: Cpu, label: "Go Backend", sub: "Worker Pool" },
      ],
    },
    "rag-pipeline": {
      nodes: [
        { icon: Database, label: "SEC EDGAR", sub: "XBRL Source" },
        { icon: ShieldCheck, label: "ChromaDB", sub: "RAG Chunking" },
        { icon: Cpu, label: "LLM Agent", sub: "0% Hallucination" },
      ],
    },
    "redis-lock": {
      nodes: [
        { icon: Globe, label: "Socket.io", sub: "5K Concurrent" },
        { icon: Database, label: "Redis", sub: "SET NX EX" },
        { icon: Server, label: "PostgreSQL", sub: "Commit" },
      ],
    },
    "mol-sim": {
      nodes: [
        { icon: Activity, label: "Mol* WebGL", sub: "3D Render" },
        { icon: Server, label: "FastAPI", sub: "Mutation API" },
        { icon: Cpu, label: "ESM-2", sub: "Stability" },
      ],
    },
    "standard-crud": {
      nodes: [
        { icon: Globe, label: "Next.js", sub: "App Router" },
        { icon: Server, label: "API Routes", sub: "Auth & Logic" },
        { icon: Database, label: "Prisma", sub: "PostgreSQL" },
      ],
    },
  };

  const config = architectures[type];

  return (
    <div className="w-full h-full flex flex-col bg-[#080808] relative overflow-hidden">
      {/* Terminal-style header */}
      <div className="p-3 border-b border-[#1a1a1a] flex items-center justify-between bg-[#0a0a0a] shrink-0">
        <div className="flex items-center gap-2">
          <GitMerge className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em]">
            sys.arch
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#333]" />
          <div className="w-2 h-2 rounded-full bg-[#333]" />
          <div className="w-2 h-2 rounded-full bg-green-900" />
        </div>
      </div>

      {/* Diagram content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
        className="flex-1 flex items-center justify-center p-4 md:p-6"
      >
        <div className="flex items-center justify-center gap-0 flex-wrap md:flex-nowrap">
          {config.nodes.map((node, i) => (
            <div key={node.label} className="flex items-center">
              <Node icon={node.icon} label={node.label} sub={node.sub} />
              {i < config.nodes.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scrolling grid */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-[-20px] pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
