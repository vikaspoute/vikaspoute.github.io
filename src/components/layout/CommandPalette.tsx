"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  Github,
  Linkedin,
  Mail,
  FileText,
  House,
} from "lucide-react";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items = [
    { name: "Go to Home", icon: House, href: "#" },
    { name: "About Vikas", icon: Terminal, href: "#about" },
    { name: "View Projects", icon: FileText, href: "#projects" },
    { name: "GitHub Profile", icon: Github, href: "#" },
    { name: "LinkedIn Profile", icon: Linkedin, href: "#" },
    { name: "Send Email", icon: Mail, href: "mailto:vikas.poute@email.com" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl glass-dark border border-white/10 rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
              <Search className="text-white/40" size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Search commands... (Esc to close)"
                className="w-full bg-transparent border-none focus:outline-none text-white text-lg placeholder:text-white/20"
              />
              <div className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-1 rounded text-white/40">
                ESC
              </div>
            </div>
            <div className="p-2 max-h-[400px] overflow-y-auto">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all group"
                >
                  <item.icon
                    size={18}
                    className="group-hover:text-primary transition-colors"
                  />
                  <span className="flex-grow">{item.name}</span>
                  <div className="opacity-0 group-hover:opacity-100 text-[10px] font-mono text-primary">
                    ENTER
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
