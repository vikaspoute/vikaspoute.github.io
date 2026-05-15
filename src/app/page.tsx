import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { Skills } from "@/components/sections/Skills";
import { RealtimeEngineering } from "@/components/sections/RealtimeEngineering";
import { Contact } from "@/components/sections/Contact";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CommandPalette } from "@/components/layout/CommandPalette";

import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BootLoader } from "@/components/ui/BootLoader";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        <BootLoader />
        <ScrollProgress />
        <CustomCursor />
        <CommandPalette />
        <Navigation />

        <Hero />
        <About />
        <RealtimeEngineering />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Contact />

        <footer className="py-12 border-t border-white/5 bg-black text-center">
          <div className="container mx-auto px-6">
            <p className="text-white/20 text-sm font-mono">
              © 2026 VIKAS POUTE. BUILT WITH NEXT.JS 15 + TAILWIND 4 + FRAMER
              MOTION.
            </p>
            <div className="mt-4 flex justify-center gap-4 text-[10px] text-white/10 uppercase tracking-widest">
              <span>Optimized for GPU</span>
              <span>•</span>
              <span>Realtime Engine v1.0</span>
            </div>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
