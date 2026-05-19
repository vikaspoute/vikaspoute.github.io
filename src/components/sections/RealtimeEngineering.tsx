"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Activity,
  Shield,
  Zap,
  Layout,
  BarChart3,
  Target,
  Network,
  Globe,
  Cpu,
  Wifi,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

// Particle Engine inside custom HTML5 Canvas for peak performance
export const SpaceDustCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      alphaSpeed: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedY: -(Math.random() * 0.15 + 0.05),
        speedX: (Math.random() - 0.5) * 0.1,
        alpha: Math.random() * 0.5 + 0.1,
        alphaSpeed: (Math.random() - 0.5) * 0.005,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle tech-grid background lines
      ctx.strokeStyle = "rgba(0, 212, 255, 0.015)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw space dust particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += p.alphaSpeed;

        if (p.y < 0) p.y = height;
        if (p.x < 0 || p.x > width) p.x = Math.random() * width;
        if (p.alpha <= 0.1 || p.alpha >= 0.7) p.alphaSpeed = -p.alphaSpeed;

        ctx.fillStyle = `rgba(0, 212, 255, ${Math.max(0.05, Math.min(p.alpha, 0.6))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect close particles with network vectors
        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

// 3D Tilt Card Component using spring physics
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", glowColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);
  
  const spotlightX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const spotlightY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseXRelative);
    y.set(mouseYRelative);
    
    spotlightX.set(e.clientX - rect.left - 175);
    spotlightY.set(e.clientY - rect.top - 175);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-sm border border-white/5 bg-white/[0.01] transition-all duration-700 hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-md overflow-hidden ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Laser Scanning Line */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent top-0 translate-y-[-10px] group-hover:animate-scan pointer-events-none z-10" />

      {/* Dynamic Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute w-[350px] h-[350px] rounded-full blur-[80px] z-0"
        style={{
          x: spotlightX,
          y: spotlightY,
          background: glowColor,
          opacity: isHovered ? 0.15 : 0,
        }}
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full p-8 flex flex-col justify-between relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

const items = [
  {
    title: "Performance First",
    icon: Activity,
    desc: "60fps. Sub-100ms. GPU-accelerated state. Non-negotiable.",
    stat: "LATENCY_TARGET",
    metricValue: "< 45ms",
    metricLabel: "RENDER_TICK",
    color: "bg-primary/10 text-primary",
    glowColor: "rgba(0, 212, 255, 0.5)",
    isWide: true,
    diagnostics: [
      "[SYS] INITIALIZING_SHADERS... OK",
      "[NET] SOCKET_TUNNEL_ESTABLISHED",
      "[DRV] CORE_CLOCK_60Hz_LOCKED",
    ],
  },
  {
    title: "Scalable Architecture",
    icon: Target,
    desc: "Systems designed to handle 10x throughput from day one.",
    stat: "SCALABILITY",
    metricValue: "99.99%",
    metricLabel: "UPTIME_STAT",
    color: "bg-blue-500/10 text-blue-500",
    glowColor: "rgba(59, 130, 246, 0.5)",
    diagnostics: [
      "[MEM] ALLOCATING_BUFFERS... OK",
      "[CPU] LOAD_BALANCER_BALANCED",
    ],
  },
  {
    title: "Realtime Sync",
    icon: Network,
    desc: "State that flows across devices without conflict.",
    stat: "SYNCHRONIZATION",
    metricValue: "0.00ms",
    metricLabel: "DRIFT_VAL",
    color: "bg-purple-500/10 text-purple-500",
    glowColor: "rgba(168, 85, 247, 0.5)",
    diagnostics: [
      "[RTC] CLOCK_DRIFT_CORRECTED",
      "[SYS] CRDT_SYNC_ACTIVE",
    ],
  },
  {
    title: "Zero-Crash Resilience",
    icon: Shield,
    desc: "Deep-stack monitoring and self-healing protocols.",
    stat: "RESILIENCE",
    metricValue: "0.00%",
    metricLabel: "CRASH_RATE",
    color: "bg-green-500/10 text-green-500",
    glowColor: "rgba(34, 197, 94, 0.5)",
    diagnostics: [
      "[SEC] DECRYPT_INTEGRITY... OK",
      "[SEC] AUTH_HANDSHAKE_STABLE",
    ],
  },
  {
    title: "Product Thinking",
    icon: Layout,
    desc: "Every technical decision anchored to user impact.",
    stat: "USER_IMPACT",
    metricValue: "100%",
    metricLabel: "COHERENCE",
    color: "bg-yellow-500/10 text-yellow-500",
    glowColor: "rgba(234, 179, 8, 0.5)",
    diagnostics: [
      "[UX] DRIFT_FREE_INTERACTION",
      "[UI] COMPONENT_LIFECYCLE_OK",
    ],
  },
];

export const RealtimeEngineering = () => {
  return (
    <section id="realtime" className="py-20 relative overflow-hidden bg-black">
      {/* High-Performance Space-Tech Canvas Particle Background */}
      <SpaceDustCanvas />

      {/* Decorative Grid Corner Overlays */}
      <div className="absolute top-0 left-0 w-48 h-48 border-t border-l border-white/[0.02] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border-b border-r border-white/[0.02] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cinematic Header Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[95%] mx-auto mb-12 relative z-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-sm gap-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-[2px] bg-primary shadow-[0_0_10px_#00d4ff] animate-pulse" />
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-mono text-primary font-bold uppercase tracking-[0.4em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                SYSTEMS_COHERENCE_ENGINE
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                REALTIME <span className="text-gradient">ENGINEERING</span>
              </h2>
            </div>

            {/* Live Diagnostics readouts */}
            <div className="flex flex-wrap gap-6 font-mono text-[9px] text-white/40 border-l border-white/10 pl-0 md:pl-6">
              <div>
                <span className="text-white/20 mr-1">// CORE:</span>
                <span className="text-primary font-semibold">ACTIVE</span>
              </div>
              <div>
                <span className="text-white/20 mr-1">// LATENCY:</span>
                <span className="text-green-500 font-semibold">&lt;45ms GOAL</span>
              </div>
              <div>
                <span className="text-white/20 mr-1">// RELIABILITY:</span>
                <span className="text-white/60">100% MONITOR</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Anti-Gravity Cards Grid */}
        <div className="grid lg:grid-cols-12 gap-6 max-w-[95%] mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1], // Custom cinematic bezier curves
              }}
              className={`${item.isWide ? "lg:col-span-8" : "lg:col-span-4"} group relative`}
            >
              {/* Retro Tech Borders */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/20 group-hover:border-primary/60 transition-colors z-20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/20 group-hover:border-primary/60 transition-colors z-20" />

              <TiltCard glowColor={item.glowColor} className="h-full">
                {item.isWide && (
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-10 transition-opacity z-0 pointer-events-none">
                    <Globe size={200} />
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10 w-full mb-8">
                  {/* Left Column: Icon + Texts */}
                  <div className="space-y-6 max-w-xl">
                    <div
                      className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.02)]`}
                    >
                      <item.icon size={20} />
                    </div>
                    <div className="space-y-2">
                      <h3
                        className={`font-black text-white tracking-tight leading-tight uppercase font-mono ${
                          item.isWide ? "text-3xl md:text-4xl italic" : "text-lg"
                        }`}
                      >
                        {item.title.replace(" ", "_\n")}
                      </h3>
                      <p
                        className={`text-white/40 leading-relaxed font-light ${
                          item.isWide ? "text-sm md:text-base max-w-lg" : "text-[11px]"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Mini Monospace Telemetry Screen */}
                  <div className="flex flex-col items-end gap-3 min-w-[140px] font-mono select-none">
                    <div className="p-3 bg-black/40 border border-white/5 rounded-sm w-full">
                      <div className="text-[8px] text-white/20 uppercase tracking-widest">{item.metricLabel}</div>
                      <div className="text-xl font-bold text-white tracking-tight mt-0.5">{item.metricValue}</div>
                    </div>
                    <div className="p-3 bg-black/20 border border-white/[0.02] rounded-sm w-full text-[8px] text-white/30 space-y-1">
                      {item.diagnostics.map((diag, index) => (
                        <div key={index} className="truncate">
                          {diag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-white/30 uppercase tracking-widest">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                    </span>
                    {item.stat}
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <ArrowUpRight size={10} className="group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* Upgraded High-End Engine Pulse Radar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 group relative"
          >
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/20 group-hover:border-primary/60 transition-colors z-20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/20 group-hover:border-primary/60 transition-colors z-20" />

            <TiltCard glowColor="rgba(0, 212, 255, 0.4)" className="h-full flex flex-col justify-center items-center">
              <div className="text-center space-y-6 py-6 select-none relative z-10 w-full flex flex-col items-center">
                
                {/* Advanced Radar Rings Visualization */}
                <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border border-primary/10 border-dashed rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-2 border border-white/5 border-dashed rounded-full"
                  />
                  <div className="absolute inset-4 rounded-full bg-primary/[0.02] border border-primary/20 flex items-center justify-center">
                    <Zap size={28} className="text-primary animate-pulse" />
                  </div>

                  {/* Pulsing Radar Waves */}
                  <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse" />
                </div>

                <div className="space-y-2 w-full px-4">
                  <div className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.4em]">
                    Engine_Pulse
                  </div>
                  <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">
                    STATE: OPERATIONAL<br />
                    CORES: 12_NODES_UP
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
