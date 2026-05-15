"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Zap,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Command,
  Clock,
} from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black">
      {/* Background Grid & Scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        <motion.div
          animate={{ top: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-primary/10"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 max-w-[95%] mx-auto">
          {/* Main Operator Identity Node */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative transition-all duration-700"
          >
            {/* Grid Borders */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

            <div className="h-full p-12 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col justify-between relative overflow-hidden group hover:bg-white/[0.04] hover:border-white/10 backdrop-blur-md transition-all duration-700">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -mr-48 -mt-48 opacity-30 group-hover:opacity-60 transition-opacity" />

              <div className="space-y-12 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-primary/10 border border-primary/20 text-[10px] text-primary font-mono uppercase tracking-[0.3em]">
                    Status: System_Optimal_v4.5
                  </div>
                  <div className="h-px flex-1 bg-white/5" />
                  <div className="flex items-center gap-2 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                    <Clock size={10} /> Uptime: 2.5_Years
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold mb-2">
                    {"// core_value_proposition"}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none italic uppercase">
                    Engineering <span className="text-gradient">Realtime</span>{" "}
                    Digital Experiences.
                  </h2>
                  <p className="text-base md:text-lg text-white/40 font-light max-w-3xl leading-relaxed border-l border-primary/20 pl-6">
                    Building production-grade systems that power real human
                    connection. Specializing in{" "}
                    <span className="text-white">WebRTC infrastructure</span>{" "}
                    and high-concurrency state synchronization across millions
                    of interactions.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
                  {[
                    { label: "PROD_APPS", val: "8+" },
                    { label: "USER_RETENTION", val: "92%" },
                    { label: "DELIVERY_SPEED", val: "+40%" },
                    { label: "CRASH_REDUCTION", val: "-25%" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-[9px] font-mono text-primary uppercase tracking-widest font-bold">
                        {item.label}
                      </div>
                      <div className="text-2xl font-bold text-white italic tracking-tighter uppercase">
                        {item.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connection Hub Node */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 group relative transition-all duration-700"
          >
            {/* Grid Borders */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

            <div className="h-full p-10 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col justify-between group hover:bg-white/[0.04] hover:border-white/10 backdrop-blur-md transition-all duration-700 overflow-hidden relative">
              <div className="space-y-8">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] font-bold">
                  System_Network_Nodes
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tighter uppercase italic leading-none">
                  Establish <span className="text-primary">Connection.</span>
                </h3>
              </div>

              <div className="space-y-3 mt-12">
                {[
                  {
                    icon: Github,
                    label: "GITHUB_LOG",
                    href: "https://github.com/vikaspoute",
                    color: "hover:bg-[#333]/20",
                  },
                  {
                    icon: Linkedin,
                    label: "LINKEDIN_SYNC",
                    href: "https://linkedin.com/in/vikaspoute",
                    color: "hover:bg-[#0077b5]/20",
                  },
                  {
                    icon: Mail,
                    label: "EMAIL_DIRECT",
                    href: "mailto:dev.vikaspoute@gmail.com",
                    color: "hover:bg-primary/20",
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className={`w-full p-6 bg-white/[0.03] border border-white/5 flex items-center justify-between group/link hover:border-primary/30 transition-all ${link.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <link.icon
                        size={20}
                        className="text-white/40 group-hover/link:text-primary transition-colors"
                      />
                      <span className="text-[10px] font-mono text-white/30 group-hover/link:text-white uppercase tracking-[0.2em]">
                        {link.label}
                      </span>
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-white/10 group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="text-[8px] font-mono text-white/10 uppercase tracking-widest leading-relaxed">
                  ENCRYPTION: RSA_4096_ACTIVE
                  <br />
                  SECURE_CONNECTION_STABLE
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Engineering Directives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 group relative transition-all duration-700"
          >
            {/* Grid Borders */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

            <div className="p-12 bg-white/[0.02] border border-white/5 rounded-sm relative overflow-hidden backdrop-blur-md group hover:bg-white/[0.04] transition-all duration-700">
              <div className="grid md:grid-cols-3 gap-16 relative z-10">
                <div className="space-y-6">
                  <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold flex items-center gap-2">
                    <Command size={14} /> {"// current_focus"}
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight">
                    Realtime Systems
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light text-sm">
                    I obsess over performance, synchronization, and user
                    experience — treating every millisecond of latency as a
                    design decision and every crash as a systems problem.
                  </p>
                </div>

                <div className="space-y-6 border-l border-white/5 md:pl-16">
                  <div className="text-[10px] font-mono text-secondary uppercase tracking-[0.4em] font-bold flex items-center gap-2">
                    <Zap size={14} /> {"// currently_building"}
                  </div>
                  <ul className="space-y-3">
                    {[
                      "WebRTC audio/video infrastructure",
                      "Shared state synchronization engine",
                      "Scalable cross-platform Flutter modules",
                      "Watch-party realtime experience layer",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs text-white/50 group/item"
                      >
                        <div className="w-1 h-1 bg-primary/40 group-hover/item:bg-primary transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 border-l border-white/5 md:pl-16">
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] font-bold flex items-center gap-2">
                    <Terminal size={14} /> {"// system_terminal"}
                  </div>
                  <div className="font-mono text-[11px] space-y-2 p-4 bg-black/40 border border-white/5 rounded-sm">
                    <div className="text-white/40">
                      <span className="text-primary">❯</span> flutter pub get
                    </div>
                    <div className="text-white/40">
                      <span className="text-primary">❯</span> export
                      EXPERTISE=&quot;realtime&quot;
                    </div>
                    <div className="text-white/40">
                      <span className="text-primary">❯</span> echo $AVAILABILITY
                    </div>
                    <div className="text-green-500/80">
                      open_to_opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
