"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Box,
  Terminal,
  Zap,
  Star,
  GitBranch,
  Cpu,
} from "lucide-react";

export const OpenSource = () => {
  return (
    <section
      id="opensource"
      className="py-20 relative overflow-hidden bg-black"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.4em]">
            <Terminal size={12} /> Registry_OSS_Contribution_v1.0
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase italic leading-none">
            Open Source <span className="text-gradient">Core.</span>
          </h2>
        </motion.div>

        <div className="max-w-[95%] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative transition-all duration-700"
          >
            {/* Grid Borders */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

            <div className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden backdrop-blur-md group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-700">
              <div className="grid lg:grid-cols-2">
                {/* Left Side: Package Identity */}
                <div className="p-10 lg:p-16 space-y-10 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Box size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                          Package_Identifier
                        </div>
                        <h3 className="text-4xl font-bold text-white tracking-tighter uppercase italic">
                          Sheetifye
                        </h3>
                      </div>
                    </div>

                    <p className="text-white/60 text-lg leading-relaxed font-light">
                      A high-performance native Excel viewer for Flutter.
                      Engineered for extreme efficiency using virtualized
                      rendering, Dart isolates, and custom byte-stream parsing.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {[
                        "Flutter",
                        "Dart",
                        "Excel",
                        "High Performance",
                        "Isolates",
                      ].map((tag) => (
                        <div
                          key={tag}
                          className="px-3 py-1.5 bg-white/5 border border-white/5 text-[9px] font-mono text-white/40 uppercase tracking-widest"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/vikaspoute/sheetifye"
                      target="_blank"
                      className="p-6 bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center gap-3 group/btn hover:border-primary/30 transition-all"
                    >
                      <Github
                        size={24}
                        className="text-white/40 group-hover/btn:text-white transition-colors"
                      />
                      <span className="text-[10px] font-mono text-white/20 group-hover/btn:text-primary uppercase tracking-[0.2em]">
                        Github Repo
                      </span>
                    </a>
                    <a
                      href="https://pub.dev/packages/sheetifye"
                      target="_blank"
                      className="p-6 bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center gap-3 group/btn hover:border-[#0175C2]/30 transition-all"
                    >
                      <ExternalLink
                        size={24}
                        className="text-white/40 group-hover/btn:text-[#0175C2] transition-colors"
                      />
                      <span className="text-[10px] font-mono text-white/20 group-hover/btn:text-[#0175C2] uppercase tracking-[0.2em]">
                        Pub.dev Package
                      </span>
                    </a>
                  </div>
                </div>

                {/* Right Side: Technical Specs */}
                <div className="p-10 lg:p-16 bg-black/40 space-y-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32" />

                  <div className="space-y-8 relative z-10">
                    <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold flex items-center gap-2">
                      <Cpu size={14} /> Optimization_Metrics
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          label: "Rendering Engine",
                          val: "Virtualized Grid",
                          icon: Zap,
                        },
                        {
                          label: "Data Processing",
                          val: "Dart Isolates",
                          icon: GitBranch,
                        },
                        {
                          label: "Memory Usage",
                          val: "Low-Footprint",
                          icon: Star,
                        },
                        {
                          label: "Format Support",
                          val: ".xlsx / .csv",
                          icon: Box,
                        },
                      ].map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between group/metric"
                        >
                          <div className="flex items-center gap-3">
                            <metric.icon
                              size={16}
                              className="text-white/20 group-hover/metric:text-primary transition-colors"
                            />
                            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                              {metric.label}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-white group-hover/metric:text-primary transition-colors italic">
                            {metric.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 space-y-4">
                    <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest leading-relaxed">
                      SOURCE: LIB_OSS_SYNC_v1.2
                      <br />
                      STATUS: PRODUCTION_READY_STABLE
                    </div>
                    <div className="font-mono text-[10px] p-4 bg-black/60 border border-white/5 rounded-sm text-white/40 italic">
                      &ldquo;Engineered to bridge the gap between heavy
                      spreadsheet data and mobile UI fluidity.&rdquo;
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
