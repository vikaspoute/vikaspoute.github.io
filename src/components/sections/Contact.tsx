"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Terminal, Command } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-[95%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.4em]">
                  <Terminal size={12} /> Registry_Contact_Node
                </div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase italic leading-none">
                  GET IN <span className="text-gradient">TOUCH</span>
                </h2>
              </div>

              <p className="text-white/60 text-xl leading-relaxed font-light max-w-xl">
                Whether you&apos;re looking for a Lead Software Engineer to
                architect your next high-scale ecosystem or want to discuss the
                future of real-time communication&mdash;my transmission nodes
                are active.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  {
                    icon: Mail,
                    label: "EMAIL",
                    val: "dev.vikaspoute@gmail.com",
                    href: "mailto:dev.vikaspoute@gmail.com",
                    isMain: true,
                  },
                  {
                    icon: Github,
                    label: "GITHUB",
                    href: "https://github.com/vikaspoute",
                  },
                  {
                    icon: Linkedin,
                    label: "LINKEDIN",
                    href: "https://linkedin.com/in/vikaspoute",
                  },
                ].map((item, i) => (
                  <MagneticButton
                    key={i}
                    className={
                      item.isMain
                        ? "flex-[2] min-w-[240px]"
                        : "flex-1 min-w-[80px]"
                    }
                  >
                    <a
                      href={item.href}
                      target={item.isMain ? undefined : "_blank"}
                      className="p-6 rounded-sm bg-white/[0.02] border border-white/5 text-white/40 hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center gap-4 backdrop-blur-md group/node h-full"
                    >
                      <item.icon
                        size={24}
                        className="group-hover/node:scale-110 transition-transform"
                      />
                      {item.isMain && (
                        <div className="text-left">
                          <div className="text-[10px] text-white/30 font-mono uppercase tracking-[0.2em]">
                            {item.label}
                          </div>
                          <div className="text-sm text-white/80 group-hover/node:text-white transition-colors font-mono">
                            {item.val}
                          </div>
                        </div>
                      )}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative group transition-all duration-700">
                {/* Grid Borders */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors z-20" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors z-20" />

                <div className="p-10 bg-white/[0.02] border border-white/5 rounded-sm backdrop-blur-md relative overflow-hidden group hover:bg-white/[0.03] transition-all duration-700">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.01] pointer-events-none">
                    <Command size={150} />
                  </div>

                  <form
                    className="space-y-8 relative z-10"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-1">
                            Identity_Name
                          </label>
                          <input
                            type="text"
                            placeholder="OPERATOR NAME"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-mono text-xs uppercase"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-1">
                            Return_Signal_Email
                          </label>
                          <input
                            type="email"
                            placeholder="EMAIL@PROTOCOL.COM"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-mono text-xs uppercase"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-1">
                          Transmission_Payload
                        </label>
                        <textarea
                          rows={5}
                          placeholder="INITIATE MESSAGE SEQUENCE..."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all resize-none font-mono text-xs uppercase"
                        />
                      </div>
                    </div>

                    <MagneticButton className="w-full">
                      <button className="w-full py-5 bg-primary/10 border border-primary/20 text-primary rounded-sm font-mono text-xs uppercase tracking-[0.4em] font-bold flex items-center justify-center gap-3 hover:bg-primary/20 transition-all group">
                        Send Transmission{" "}
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </button>
                    </MagneticButton>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
