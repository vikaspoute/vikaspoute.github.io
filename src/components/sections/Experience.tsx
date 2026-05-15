"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TechIcon } from "../ui/TechIcon";
import {
  Terminal,
  Zap,
  Target,
  Layers,
  Briefcase,
  Command,
  Bell,
  Globe,
  ShoppingCart,
  Users2,
  Database,
  MessageSquare,
  Monitor,
} from "lucide-react";

interface ExperienceData {
  id: string;
  role: string;
  company: string;
  period: string;
  status: string;
  location: string;
  type: string;
  desc: string;
  highlights: { icon: React.ElementType; label: string }[];
  achievements: string[];
  stack: string[];
  ref: string;
  logs: string[];
}

const experiences = [
  {
    id: "01",
    role: "Software Engineer // Team Lead",
    company: "MUSTER DEKHO",
    period: "JUL 2023 – JAN 2026",
    status: "ARCHIVE_SYNC",
    location: "AHMEDABAD (REMOTE)",
    type: "Full-Stack Orchestration · Team Leadership",
    desc: "Owned the architecture for 8+ production apps. Led a team of 8 through Agile cycles and full-scale system migrations.",
    highlights: [
      { icon: Globe, label: "App Orchestration" },
      { icon: Bell, label: "Push Notifications" },
      { icon: ShoppingCart, label: "E-comm Arch" },
      { icon: Users2, label: "Team Lead" },
      { icon: Database, label: "Backend Core" },
    ],
    achievements: [
      "Implemented App Links and Universal Links protocols for seamless cross-app navigation.",
      "Engineered high-throughput Push Notification systems via FCM for 100k+ active user nodes.",
      "Architected full-scale E-commerce web platforms using React/NextJS with secure global payments.",
      "Optimized Java/Spring Boot backend migrations and MyBatis queries for high-concurrency data nodes.",
      "Integrated Native Java modules into Flutter via Platform Channels for performance-critical OS features.",
    ],
    stack: [
      "Flutter",
      "Java",
      "Spring Boot",
      "NextJS",
      "React",
      "Angular",
      "MyBatis",
      "AWS",
      "FCM",
      "MySQL",
      "S3",
      "RDS",
    ],
    ref: "NODE_BETA_VII",
    logs: [
      "[SYS] Navigation Protocol OK",
      "[FCM] Push Service Active",
      "[TEAM] 8 Nodes Managed",
    ],
  },
  {
    id: "02",
    role: "Software Engineer",
    company: "YACHII",
    period: "JAN 2026 – PRESENT",
    status: "ACTIVE_NODE",
    location: "BENGALURU (HSR)",
    type: "Realtime Communication · Native System Integration",
    desc: "Built the realtime communication core — native iOS broadcast extensions, method channel bridges, and cross-app media pipelines.",
    highlights: [
      { icon: MessageSquare, label: "Real-time Chatting" },
      { icon: Monitor, label: "Screen Sharing" },
      { icon: Zap, label: "Broadcast Screen" },
    ],
    achievements: [
      "Architected Flutter–Native bridges (Swift) for low-latency iOS screen sharing via RPBroadcastSampleHandler.",
      "Engineered iOS Broadcast Extension lifecycles using App Groups and shared IPC memory buffers.",
      "Built cross-app chatting and media pipelines for seamless content ingestion from external apps.",
      "Optimized WebRTC track delivery by tuning CVPixelBuffer handling, reducing frame drop by 40%.",
    ],
    stack: [
      "Flutter",
      "Swift",
      "Dart",
      "WebRTC",
      "Method Channels",
      "iOS Extension",
      "IPC",
    ],
    ref: "NODE_ALPHA_VII",
    logs: [
      "[CHAT] Protocol Stable",
      "[RTC] Sync Stable",
      "[IOS] Broadcast Active",
    ],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-black"
    >
      {/* Cinematic Background DNA */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.4em]">
            <Terminal size={12} /> Registry_v7.0_Wide
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 uppercase italic leading-none">
            Professional <span className="text-gradient">Journey.</span>
          </h2>
        </motion.div>

        <div className="space-y-16 max-w-[95%] mx-auto">
          {" "}
          {/* Using 95% max-width for the container to give 90% feel to cards */}
          {experiences.map((exp, i) => (
            <ExperienceRegistryCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceRegistryCard = ({
  exp,
  index,
}: {
  exp: ExperienceData;
  index: number;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full md:w-[92%] mx-auto group relative transition-all duration-700"
    >
      {/* Grid Borders */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

      <div className="relative overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 backdrop-blur-md rounded-sm">
        {/* Big Faded Index Background */}
        <div className="absolute -left-4 -bottom-12 pointer-events-none select-none overflow-hidden">
          <span className="text-[25rem] font-black text-white/[0.02] group-hover:text-white/[0.03] transition-colors duration-1000 leading-none tracking-tighter italic">
            {exp.id}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] min-h-[450px] relative z-10">
          {/* Experience Content (Left) */}
          <div className="p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-mono text-primary font-bold tracking-tighter">
                    NODE_{exp.id}
                  </span>
                  <div className="h-px w-12 bg-white/10" />
                  <div
                    className={`flex items-center gap-1.5 text-[8px] font-mono uppercase ${index === 1 ? "text-green-500" : "text-white/30"}`}
                  >
                    <div
                      className={`w-1 h-1 rounded-full ${index === 1 ? "bg-green-500 animate-pulse" : "bg-white/20"}`}
                    />
                    {exp.status}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  {exp.period}
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-none uppercase italic">
                    {exp.company}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <div className="text-xl font-bold text-white/80 tracking-tight">
                      {exp.role}
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                    <div className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <p className="text-white/70 group-hover:text-white/90 transition-colors text-sm font-light leading-relaxed max-w-3xl border-l-2 border-primary/20 pl-8 italic">
                  &ldquo;{exp.desc}&rdquo;
                </p>

                {/* Technical Capability Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-[9px] font-mono text-white/40 uppercase tracking-wider hover:border-primary/20 transition-all"
                    >
                      <h.icon size={12} className="text-primary/60" />
                      {h.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-2 font-bold">
                  <Layers size={12} className="text-primary" />{" "}
                  {"Technical_DNA_Stack"}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((tech: string) => (
                    <div
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 border border-white/5 text-[9px] font-mono text-white/40 group-hover:text-white/70 uppercase flex items-center gap-2 hover:border-primary/30 transition-all"
                    >
                      <TechIcon name={tech} size={10} />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Log Section (Right) */}
          <div className="relative bg-black p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

            <div className="absolute top-6 left-6 right-6 opacity-30 pointer-events-none space-y-1">
              {exp.logs.map((log: string, idx: number) => (
                <div
                  key={idx}
                  className="text-[7px] font-mono text-white/40 uppercase tracking-tighter truncate font-light flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-white/20 rounded-full" /> {log}
                </div>
              ))}
            </div>

            <div className="space-y-8 relative z-10 pt-10">
              <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold flex items-center gap-2">
                <Command size={12} /> Registry_Impact_Logs
              </div>
              <ul className="space-y-5">
                {exp.achievements.map((ach: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-xs group/feat"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/40 mt-1.5 group-hover/feat:bg-primary transition-all duration-300 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-white/80 group-hover:text-white/100 transition-colors uppercase leading-relaxed tracking-wider">
                        {ach}
                      </span>
                      <div className="text-[7px] font-mono text-white/20 uppercase tracking-widest">
                        Status: Verified_Node
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              style={{ y: ySpring }}
              className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-1000"
            >
              {index === 1 ? (
                <Zap size={250} className="text-white" />
              ) : (
                <Briefcase size={250} className="text-white" />
              )}
            </motion.div>

            <div className="pt-10 border-t border-white/5 relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Target size={14} className="text-primary/40" />
                <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em]">
                  {exp.location}
                </div>
              </div>
              <div className="text-[8px] font-mono text-white/10 uppercase tracking-widest text-right leading-relaxed">
                ID_AUTH: {exp.ref}
                <br />
                REGISTRY_v7.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
