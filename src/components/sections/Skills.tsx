"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechIcon } from "../ui/TechIcon";
import { Braces, Layers, Globe, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile / Cross-Platform",
    icon: Layers,
    skills: [
      "Flutter",
      "Dart",
      "BLoC",
      "Provider",
      "Riverpod",
      "GetX",
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "React Native",
    ],
    id: "MOB_ARCH_01",
  },
  {
    title: "Backend / API Engineering",
    icon: Braces,
    skills: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "JPA / Hibernate",
      "RESTful API",
      "Swagger",
      "Node.js",
      "Express.js",
    ],
    id: "SRV_SYS_02",
  },
  {
    title: "Cloud / DevOps / DB",
    icon: Cloud,
    skills: [
      "AWS",
      "Firebase",
      "GitHub Actions",
      "GitLab CI/CD",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
    id: "INFRA_03",
  },
  {
    title: "Web / Third-Party",
    icon: Globe,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
      "Google Maps",
      "Aadhaar eKYC",
      "Material Design 3",
    ],
    id: "WEB_INTEG_04",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[8px] leading-none select-none break-all">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap animate-grid-move">
            {Array.from({ length: 50 }).map((_, j) => (
              <React.Fragment key={j}>
                FLUTTER_JAVA_SPRINGBOOT_AWS_MYBATIS_BLOC_
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.2em]">
            System_Technical_Inventory
          </div>
          <h2 className="text-5xl font-bold tracking-tighter text-white/90">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-white/40 font-mono text-sm max-w-2xl mx-auto uppercase tracking-widest mt-4">
            Leveraging 2.5+ years of full-stack expertise to build
            production-grade architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[95%] mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative group h-full">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors" />

                <div className="h-full p-8 bg-white/[0.02] border border-white/5 backdrop-blur-md group-hover:bg-white/[0.04] transition-all rounded-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/50 transition-colors rounded-sm">
                        <cat.icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-white/90 font-mono tracking-tight uppercase italic">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-white/20">
                      {cat.id}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-black/40 border border-white/5 text-[10px] font-mono text-white/60 flex items-center gap-2 group/skill hover:border-primary/30 hover:text-white transition-all rounded-sm"
                      >
                        <TechIcon
                          name={skill}
                          size={12}
                          className="text-white/30 group-hover/skill:text-primary transition-colors"
                        />
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex gap-1 h-4 items-end overflow-hidden">
                    {Array.from({ length: 25 }).map((_, j) => (
                      <motion.div
                        key={j}
                        className="flex-1 bg-primary/20"
                        animate={{
                          height: [
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
