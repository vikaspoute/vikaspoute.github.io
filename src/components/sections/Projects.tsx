"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { TechIcon } from "../ui/TechIcon";
import {
  Video,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Users,
  Layers,
  Command,
  MapPin,
  Shield,
} from "lucide-react";

interface ProjectData {
  title: string;
  description: string;
  icon: React.ElementType;
  stack: string[];
  features: string[];
  id: string;
  ref_id: string;
  status: string;
  logs: string[];
}

const projects = [
  {
    title: "Community Ecosystem Cluster",
    description:
      "Architected a complex 3-app suite for large-scale community management. Features a centralized Java core backend with distributed data mesh for multi-platform synchronization.",
    icon: Users,
    stack: [
      "Flutter",
      "BLoC",
      "Java",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "S3",
      "EC2",
      "RDS",
      "REST API",
      "AWS",
    ],
    features: [
      "3-App Integrated Full Stack Suite",
      "Java/Spring Boot Logic Cluster",
      "Distributed S3/RDS Asset Storage",
      "Cross-Platform State Synchronization",
    ],
    id: "01",
    ref_id: "ENGINE_COMM_01",
    status: "FULL_STACK_PROD",
    logs: [
      "[COM] Node cluster verified",
      "[RDS] Multi-AZ persistent",
      "[SYS] 3-App mesh stable",
    ],
  },
  {
    title: "On-Demand Service Network",
    description:
      "Enterprise dispatch and booking system with high-precision GPS tracking and automated provider lifecycle management. Achieved 35% improvement in query response times.",
    icon: MapPin,
    stack: [
      "Flutter",
      "BLoC",
      "GoogleMap",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Razorpay",
      "REST API",
      "AWS",
      "EC2",
      "RDS",
    ],
    features: [
      "Real-time GPS Dispatch Logic",
      "Razorpay Payment Orchestration",
      "Automated Provider Scheduling",
      "Optimized MyBatis Data Access",
    ],
    id: "02",
    ref_id: "ENGINE_SRV_02",
    status: "MISSION_CRITICAL",
    logs: [
      "[GPS] Pulse calibrated",
      "[DB] Latency < 50ms",
      "[PAY] Razorpay hook active",
    ],
  },
  {
    title: "Scalable Education Engine",
    description:
      "Full-stack LMS serving a large student base with 92% retention. Features secure passwordless authentication and distributed classroom nodes.",
    icon: Shield,
    stack: [
      "Flutter",
      "BLoC",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Cognito",
      "Passwordless",
      "S3",
      "EC2",
      "RDS",
      "REST API",
      "AWS",
    ],
    features: [
      "4K Video & Live Class Engine",
      "Secure Passwordless Cognito Auth",
      "92% User Retention Metrics",
      "Distributed Asset Management",
    ],
    id: "03",
    ref_id: "ENGINE_EDU_03",
    status: "PRODUCTION_LIVE",
    logs: [
      "[COG] Identity verified",
      "[S3] Education assets synced",
      "[DB] MyBatis mapping up",
    ],
  },
  {
    title: "Chat & Video Communication Hub",
    description:
      "Industrial-grade RTC platform featuring low-latency video calls, spatial audio, screen sharing, and real-time instant messaging. Optimized for 40% faster delivery.",
    icon: Video,
    stack: [
      "Flutter",
      "BLoC",
      "WebRTC",
      "SocketIO",
      "Node.js",
      "Redis",
      "Firebase",
      "REST API",
    ],
    features: [
      "Low-Latency 4K Video Calling",
      "Real-time Chat & Screen Share",
      "SocketIO Signal Orchestration",
      "40% Delivery Acceleration",
    ],
    id: "04",
    ref_id: "ENGINE_RTC_04",
    status: "CORE_ENGINE_ARCH",
    logs: [
      "[RTC] WebRTC channel open",
      "[MSQ] Socket link established",
      "[REDIS] Chat cache hit",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.4em]">
            <Terminal size={12} /> Registry_Deployment_Archive_v4.0
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 uppercase italic leading-none">
            Selected <span className="text-gradient">Engineered Works.</span>
          </h2>
        </motion.div>

        <div className="space-y-16 max-w-[95%] mx-auto">
          {projects.map((project, i) => (
            <ModernCompactCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModernCompactCard = ({
  project,
}: {
  project: ProjectData;
  index: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseRotationX = useTransform(mouseX, [-0.5, 0.5], ["7deg", "-7deg"]);
  const mouseRotationY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const mouseXRelative = event.clientX - rect.left;
      x.set(mouseXRelative / width - 0.5);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: mouseRotationX,
        rotateY: mouseRotationY,
        transformStyle: "preserve-3d",
      }}
      className="w-full md:w-[92%] mx-auto group relative transition-all duration-700 perspective-1000"
    >
      {/* Dynamic Glow Overlay */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-500 rounded-sm pointer-events-none" />

      {/* Grid Borders */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

      <div className="relative overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 backdrop-blur-md rounded-sm h-full">
        {/* Big Faded Index Background */}
        <div className="absolute -left-4 -bottom-12 pointer-events-none select-none overflow-hidden">
          <span className="text-[25rem] font-black text-white/[0.02] group-hover:text-white/[0.03] transition-colors duration-1000 leading-none tracking-tighter italic">
            {project.id}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] min-h-[480px] relative z-10">
          {/* Project Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-mono text-primary font-bold tracking-tighter">
                    PROJECT_{project.id}
                  </span>
                  <div className="h-px w-8 bg-white/10" />
                  <div className="flex items-center gap-1.5 text-[8px] font-mono text-green-500/80 uppercase">
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-none">
                  {project.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors text-lg font-light leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-2">
                  <Layers size={12} /> Tech_Stack_Inventory
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string) => (
                    <div
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 border border-white/5 text-[10px] font-mono text-white/50 uppercase flex items-center gap-2 hover:border-primary/30 transition-colors"
                    >
                      <TechIcon name={tech} size={10} />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature & Visualizer Section */}
          <div className="relative bg-black p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

            {/* Scrolling System Logs */}
            <div className="absolute top-6 left-6 right-6 opacity-20 pointer-events-none space-y-1">
              {project.logs.map((log: string, idx: number) => (
                <div
                  key={idx}
                  className="text-[7px] font-mono text-white uppercase tracking-tighter truncate font-light"
                >
                  {log}
                </div>
              ))}
            </div>

            <div className="space-y-8 relative z-10 pt-8">
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] flex items-center gap-2">
                <Command size={12} /> Deployment_Specs
              </div>
              <ul className="space-y-4">
                {project.features.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-xs text-white/70 group-hover:text-white/90 transition-colors font-mono group/feat"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/40 mt-1.5 group-hover/feat:bg-primary transition-colors" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              style={{ y: ySpring, translateZ: 50 }}
              className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-1000"
            >
              <project.icon size={200} className="text-white" />
            </motion.div>

            <div className="pt-8 border-t border-white/5 relative z-10 flex items-center justify-between">
              <div className="flex gap-4">
                <Cpu size={14} className="text-white/20" />
                <Database size={14} className="text-white/20" />
                <Cloud size={14} className="text-white/20" />
              </div>
              <div className="text-[7px] font-mono text-white/10 uppercase tracking-widest text-right">
                V{project.id}.SYSTEM_READY
                <br />
                AGILE_SPRINT_v2.5
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
