export const projects = [
  {
    title: "PulseWatch",
    description:
      "Autonomous Agentic SRE & Cloud-Native Observability Platform with LLM-as-a-Judge Anomaly Verification, Closed-Loop Auto-Remediation, NATS JetStream Backpressure, and sub-20ms p99 ingestion. 38 Go tests, 41 Python tests, 100% chaos resilience.",
    technologies: ["Go", "Python", "NATS JetStream", "Claude AI", "Docker", "React"],
    category: "Platform Engineering",
    live: "https://sakshar2303.github.io/PulseWatch/",
    github: "https://github.com/sakshar23/PulseWatch",
    featured: true,
    architecture: "event-driven",
  },
  {
    title: "Filing Sleuth",
    description:
      "Grounded SEC EDGAR Financial Research Agent with Verifiable Citations, XBRL Ground Truth, Structure-Aware Chunking, and Zero-Hallucination Guarantees. Scored 20/20 (100%) on benchmark evaluation.",
    technologies: ["Python", "FastAPI", "LLMs", "XBRL", "React", "RAG"],
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
];
