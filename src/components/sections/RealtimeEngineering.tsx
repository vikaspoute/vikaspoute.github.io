"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Zap,
  Layout,
  BarChart3,
  Target,
  Network,
  Globe,
} from "lucide-react";

const items = [
  {
    title: "Performance First",
    icon: Activity,
    desc: "60fps. Sub-100ms. GPU-accelerated state. Non-negotiable.",
    stat: "LATENCY_TARGET",
    color: "bg-primary/10 text-primary",
    isWide: true,
  },
  {
    title: "Scalable Architecture",
    icon: Target,
    desc: "Systems designed to handle 10x throughput from day one.",
    stat: "SCALABILITY",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Realtime Sync",
    icon: Network,
    desc: "State that flows across devices without conflict.",
    stat: "SYNCHRONIZATION",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Zero-Crash Resilience",
    icon: Shield,
    desc: "Deep-stack monitoring and self-healing protocols.",
    stat: "RESILIENCE",
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Product Thinking",
    icon: Layout,
    desc: "Every technical decision anchored to user impact.",
    stat: "USER_IMPACT",
    color: "bg-yellow-500/10 text-yellow-500",
  },
];

export const RealtimeEngineering = () => {
  return (
    <section id="realtime" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 max-w-[95%] mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${item.isWide ? "lg:col-span-8" : "lg:col-span-4"} group relative transition-all`}
            >
              {/* Grid Borders */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

              <div className="h-full p-8 bg-white/[0.02] border border-white/5 rounded-sm backdrop-blur-md flex flex-col justify-between group hover:bg-white/[0.04] transition-all relative overflow-hidden">
                {item.isWide && (
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                    <Globe size={200} />
                  </div>
                )}

                <div className="space-y-6 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className={`font-bold text-white tracking-tight leading-tight uppercase font-mono ${item.isWide ? "text-4xl" : "text-lg"}`}
                    >
                      {item.title.replace(" ", "_\n")}
                    </h3>
                    <p
                      className={`text-white/30 leading-relaxed font-light ${item.isWide ? "text-lg max-w-md" : "text-[11px]"}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 uppercase font-bold tracking-widest">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" />
                    {item.stat}
                  </div>
                  <BarChart3 size={14} className="text-white/10" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Small Status Node - Span 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 group relative transition-all"
          >
            {/* Grid Borders */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

            <div className="h-full p-8 bg-white/[0.02] border border-white/5 rounded-sm backdrop-blur-md flex items-center justify-center group hover:bg-white/[0.04] transition-all relative overflow-hidden">
              <div className="text-center space-y-4">
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border border-primary/20 border-dashed rounded-full"
                  />
                  <Zap size={32} className="text-primary animate-pulse" />
                </div>
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                  Engine_Pulse
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
