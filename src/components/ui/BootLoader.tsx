"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "[SYS] INITIALIZING_KRNL_v7.0.2",
  "[MEM] ALLOCATING_BUFFER_NODES...",
  "[NET] ESTABLISHING_SECURE_TUNNEL...",
  "[RTC] WEBRTC_STACK_VERIFIED",
  "[DRV] FLUTTER_ENGINE_ACTIVE",
  "[DRV] JAVA_SPRING_BACKEND_READY",
  "[SEC] AUTH_HANDSHAKE_COMPLETE",
  "[SYS] REGISTRY_NODE_SYNCED",
  "DECRYPTING_USER_INTERFACE...",
];

export const BootLoader = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setLogs((prev) => [...prev, bootSequence[i]]);
        i++;
      } else {
        setTimeout(() => setComplete(true), 800);
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-6 font-mono"
        >
          <div className="max-w-md w-full space-y-2">
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary text-xs tracking-tighter"
              >
                <span className="text-white/20 mr-2">{">"}</span> {log}
              </motion.div>
            ))}

            <div className="pt-8">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-primary shadow-[0_0_10px_#00d4ff]"
                />
              </div>
              <div className="mt-2 text-[10px] text-white/40 flex justify-between uppercase">
                <span>Loading Systems</span>
                <span>
                  {Math.min(
                    Math.floor((logs.length / bootSequence.length) * 100),
                    100,
                  )}
                  %
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
