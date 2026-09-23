export const projects = [
  {
    title: "PulseWatch",
    description:
      "Designed a real-time observability platform as a decoupled telemetry pipeline built for high-throughput ingestion with zero data loss. Wrote Go edge collectors with ring buffers feeding NATS JetStream for at-least-once queuing into TimescaleDB. Decoupled anomaly detection from ingestion so Python/FastAPI AI detectors scale or fail independently.",
    technologies: ["Go", "NATS JetStream", "TimescaleDB", "FastAPI", "React", "Python"],
    category: "Platform Engineering",
    live: "https://sakshar2303.github.io/PulseWatch/",
    github: "https://github.com/sakshar2303/PulseWatch",
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
    github: "https://github.com/sakshar2303/filing-sleuth",
    featured: true,
    architecture: "rag-pipeline",
  },
  {
    title: "SnapTix",
    description:
      "Real-Time Concurrency-Safe Seat Booking Platform with zero double-bookings guaranteed under 5,000 concurrent contenders. Uses Redis SET NX EX for sub-50ms collision resolution and native 5-min TTL for zombie hold cleanup.",
    technologies: ["Next.js", "Socket.io", "Redis", "PostgreSQL", "TypeScript"],
    category: "Real-Time Systems",
    github: "https://github.com/sakshar2303/SnapTix",
    featured: false,
    architecture: "redis-lock",
  },
  {
    title: "Protein Playground",
    description:
      "Interactive 3D Protein Structure & In Silico Mutation Stability Explorer. Simulate point mutations on any residue in real-time with instant 3D spatial feedback and zero-shot evolutionary stability scoring using Meta's ESM-2.",
    technologies: ["React", "TypeScript", "FastAPI", "ESM-2", "Mol*", "Tailwind CSS"],
    category: "Bioinformatics / AI",
    github: "https://github.com/sakshar2303/Protein-Playground",
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
    github: "https://github.com/sakshar2303/swarm-357",
    featured: false,
    architecture: "rag-pipeline",
  },
  {
    title: "BrainDB",
    description:
      "Local-first AI Memory & Multi-Agent Orchestrator featuring Hybrid Search, Self-Learning, and a Knowledge Graph. Built with 110 REST endpoints and 51 MCP tools.",
    technologies: ["TypeScript", "SQLite", "FTS5", "MCP"],
    category: "AI Infrastructure",
    github: "https://github.com/sakshar2303/BrainDB",
    featured: false,
    architecture: "redis-lock",
  },
  {
    title: "Diplomat Agent",
    description:
      "An AI agent security scanner designed to find every tool call that can change the real world and highlights which operations lack proper safety checks.",
    technologies: ["Python", "AST", "Security", "AI Agents"],
    category: "Security / AI",
    github: "https://github.com/sakshar2303/diplomat-agent",
    featured: false,
    architecture: "rag-pipeline",
  },
  {
    title: "CypherQube",
    description:
      "Post-Quantum Cryptography (PQC) attack scanner. Engineered a specialized pipeline to detect cryptographic vulnerabilities in modern systems.",
    technologies: ["Python", "Cryptography", "Security"],
    category: "Security / Cryptography",
    github: "https://github.com/sakshar2303/cypherqube",
    featured: false,
    architecture: "event-driven",
  },
  {
    title: "BeamSync",
    description:
      "High-performance file sharing and synchronization system designed to transfer large datasets faster across distributed networks.",
    technologies: ["Python", "Networking", "Concurrency"],
    category: "Networking / Systems",
    github: "https://github.com/sakshar2303/BeamSync",
    featured: false,
    architecture: "event-driven",
  },
];
