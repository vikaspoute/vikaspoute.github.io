"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { TechIcon } from "../ui/TechIcon";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText =
    "Architecting high-performance real-time systems, scalable Flutter infrastructures, and low-latency Java + Spring Boot backend ecosystems.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent/20 blur-[120px] animate-pulse-slow delay-2000" />

        {/* Floating Data Nodes */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[20%] left-[15%] w-24 h-24 border border-primary/20 rounded-full flex items-center justify-center"
        >
          <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[30%] right-[15%] w-32 h-32 border border-secondary/20 rounded-full flex items-center justify-center"
        >
          <div className="w-1 h-1 bg-secondary rounded-full animate-ping" />
        </motion.div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-primary text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight glitch-hover">
              Vikas <span className="text-gradient">Poute</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mt-4 font-mono">
              Software Engineer | Flutter + Java + Real-Time Systems
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed h-[4.5rem] md:h-auto"
          >
            {text}
            <span className="animate-pulse inline-block w-1 h-5 bg-primary ml-1 align-middle" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <MagneticButton>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-white/90 transition-all"
              >
                View Projects <ArrowRight size={18} />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 glass text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Contact Me
              </button>
            </MagneticButton>
          </motion.div>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 pt-12"
          >
            {[
              "WebRTC",
              "Socket.IO",
              "Flutter",
              "Java",
              "Spring Boot",
              "TypeScript",
              "Node.js",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full glass-dark text-white/50 text-xs border border-white/5 flex items-center gap-2 group/pill hover:border-primary/50 transition-colors"
              >
                <TechIcon
                  name={tech}
                  size={14}
                  className="text-primary group-hover/pill:scale-110 transition-transform"
                />
                {tech}
              </span>
            ))}
          </motion.div>

          <div className="pt-12 flex justify-center gap-6">
            <a
              href="https://github.com/vikaspoute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vikaspoute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dev.vikaspoute@gmail.com"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Signal Pulse */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs uppercase tracking-widest font-mono">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-bounce" />
        <span>Scrolldown</span>
      </div>
    </section>
  );
};
