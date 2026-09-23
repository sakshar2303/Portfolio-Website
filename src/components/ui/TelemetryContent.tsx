"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { GitFork, Star, Code2, Database } from "lucide-react";
import ContributionChart from "@/components/ui/ContributionChart";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface TelemetryContentProps {
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: string[];
  contributions: ContributionDay[];
  totalContributions: number;
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

/* ─── Framer Variants ─── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function TelemetryContent({
  publicRepos,
  totalStars,
  totalForks,
  topLanguages,
  contributions,
  totalContributions,
}: TelemetryContentProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the background grid
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0.3, 0.3, 0]);

  // Scroll-progress line across the top of the section
  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  // Section-level opacity for cinematic entry/exit
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.08, 0.9, 1], [0.3, 1, 1, 0.5]);

  const stats = [
    { label: "Repositories", sublabel: "PUBLIC_INDEXED", value: publicRepos, icon: Database, bgIcon: Code2, index: 0 },
    { label: "Total Stars", sublabel: "ACROSS_ALL_REPOS", value: totalStars, icon: Star, bgIcon: Star, index: 1 },
    { label: "Forks", sublabel: "COMMUNITY_DRIVEN", value: totalForks, icon: GitFork, bgIcon: GitFork, index: 2 },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      className="py-24 md:py-32 relative border-b border-[#222] bg-[#050505] overflow-hidden"
    >
      {/* Animated Background Grid with parallax */}
      <motion.div
        style={{ y: gridY, opacity: gridOpacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      {/* Scroll progress line */}
      <motion.div
        style={{ width: lineWidth }}
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-emerald-500/80 via-emerald-400/50 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header — slides in from left */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono font-medium tracking-widest text-green-500 uppercase flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Telemetry
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              GitHub Metrics
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 font-mono text-xs text-left md:text-right"
          >
            <p>ENDPOINT: api.github.com/users/sakshar2303</p>
            <p>STATUS: <span className="text-green-500">CONNECTED</span></p>
          </motion.div>
        </div>

        {/* Stat Cards — staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              custom={stat.index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.25 }}
              className="border border-[#222] bg-[#0a0a0a] p-6 transition-colors relative overflow-hidden group cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <stat.bgIcon className="w-16 h-16 text-white" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <stat.icon className="w-4 h-4" />
                  <span className="font-mono text-xs tracking-widest uppercase">{stat.label}</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs font-mono text-gray-500">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Chart — fade up */}
        {contributions.length > 0 && (
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <ContributionChart
              contributions={contributions}
              total={totalContributions}
            />
          </motion.div>
        )}

        {/* Bottom Banner — fade up */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-4 border border-[#222] bg-[#0a0a0a] p-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-gray-400" />
            <span className="font-mono text-sm text-gray-300">Top Languages Detected:</span>
          </div>
          <div className="flex gap-2">
            {topLanguages.map((lang) => (
              <motion.span
                key={lang}
                whileHover={{ scale: 1.08, borderColor: "rgba(255,255,255,0.2)" }}
                className="px-3 py-1 bg-[#111] border border-[#333] text-xs font-mono text-gray-400 transition-colors"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
