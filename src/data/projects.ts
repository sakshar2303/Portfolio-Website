export const projects = [
  {
    title: "PulseWatch",
    description:
      "Designed a real-time observability platform as a decoupled telemetry pipeline built for high-throughput ingestion with zero data loss. Wrote Go edge collectors with ring buffers feeding NATS JetStream for at-least-once queuing into TimescaleDB. Decoupled anomaly detection from ingestion so Python/FastAPI AI detectors scale or fail independently.",
    technologies: ["Go", "NATS JetStream", "TimescaleDB", "FastAPI", "React", "Python"],
    category: "Platform Engineering",
    live: "https://sakshar2303.github.io/PulseWatch/",
    github: "https://github.com/sakshar23/PulseWatch",
    featured: true,
    architecture: "event-driven",
  },
  {
    title: "Filing Sleuth",
    description:
      "Built an LLM agent that measured 0.0% hallucination on complex multi-fiscal-year comparisons, using a deterministic retrieval pipeline written from scratch. Forced every generated answer to cite verifiable ground truth by treating SEC XBRL tags as the source of authority.",
    technologies: ["Python", "ChromaDB", "FastAPI", "Anthropic/OpenAI APIs", "SEC EDGAR API"],
    category: "AI / FinTech",
    live: "https://sakshar2303.github.io/filing-sleuth/",
    github: "https://github.com/sakshar23/filing-sleuth",
    featured: true,
    architecture: "rag-pipeline",
  },
  {
    title: "SnapTix",
    description:
      "Real-Time Concurrency-Safe Seat Booking Platform with zero double-bookings guaranteed under 5,000 concurrent contenders. Uses Redis SET NX EX for sub-50ms collision resolution and native 5-min TTL for zombie hold cleanup.",
    technologies: ["Next.js", "Socket.io", "Redis", "PostgreSQL", "TypeScript"],
    category: "Real-Time Systems",
    github: "https://github.com/sakshar23/SnapTix",
    featured: false,
    architecture: "redis-lock",
  },
  {
    title: "Protein Playground",
    description:
      "Interactive 3D Protein Structure & In Silico Mutation Stability Explorer. Simulate point mutations on any residue in real-time with instant 3D spatial feedback and zero-shot evolutionary stability scoring using Meta's ESM-2.",
    technologies: ["React", "TypeScript", "FastAPI", "ESM-2", "Mol*", "Tailwind CSS"],
    category: "Bioinformatics / AI",
    github: "https://github.com/sakshar23/Protien-Playground",
    featured: false,
    architecture: "mol-sim",
  },
  {
    title: "Hisaab Sathi",
    description:
      "Full-stack financial management platform (Vyapaar Sathi) with bank account tracking, dynamic charting, cookie consent management, and privacy-first architecture. Built for Indian small businesses.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "FinTech / SaaS",
    featured: false,
    architecture: "standard-crud",
  },
  {
    title: "Kubescape Core",
    description:
      "Fixed a class of silent-crash bugs in Kubescape (Kubernetes security platform) by adding explicit error handling for git URL parsing. Landed production code reviewed and merged by external maintainers.",
    technologies: ["Go", "Kubernetes", "Git", "Security"],
    category: "Open Source / Infrastructure",
    github: "https://github.com/kubescape/kubescape",
    featured: false,
    architecture: "event-driven",
  },
  {
    title: "Swarm AI Agents",
    description:
      "Built multi-agent conversational systems using local LLMs. Designed a robust orchestration layer that routes complex tasks to specialized sub-agents with shared memory and tool usage capabilities.",
    technologies: ["Python", "OpenAI SDK", "LangChain", "Docker"],
    category: "AI / Agents",
    github: "https://github.com/sakshar23/swarm-agents",
    featured: false,
    architecture: "rag-pipeline",
  },
];
