"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Ship, Anchor } from "lucide-react";

const wakePhrases = [
  "24/7 Availability",
  "Fast Response",
  "All Port Coverage",
  "Certified Quality",
  "Reliable Service",
  "Customer Centric"
];

export default function ShipPath() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section 
      ref={containerRef} 
      className="py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-100/60"
      id="ship-path"
    >
      {/* Background Decorative Waves */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="#0A3D62" strokeWidth="0.5" />
          <path d="M0 60 Q 25 50 50 60 T 100 60" fill="none" stroke="#0A3D62" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="relative w-full h-56 lg:h-64">
          
          {/* Subtle Wave Path (Horizontal Line) */}
          <div className="absolute top-[60%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent z-0" />
          
          {/* Buoyant Ship Animation */}
          <motion.div
            initial={{ x: "-20%", y: 0 }}
            animate={inView ? { 
              x: ["-20%", "120%"],
              y: [0, -10, 4, -8, 2, 0], // Buoyancy / Floating
              rotate: [0, -3, 3, -1.5, 0] // Rocking
            } : { x: "-20%", y: 0 }}
            transition={{ 
              x: { duration: 8.5, repeat: Infinity, ease: "linear" },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-[35%] z-20"
          >
            <div className="relative group">
              {/* Ship Icon with Shadow */}
              <div className="relative p-2">
                <Ship 
                  className="w-16 h-16 lg:w-24 lg:h-24 text-navy transform -scale-x-100 drop-shadow-[0_20px_30px_rgba(10,61,98,0.2)] transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              
              {/* Wake Bubble Particles */}
              <div className="absolute -left-6 top-16 flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      scale: [1, 2, 0.5], 
                      opacity: [0.6, 0, 0.6],
                      x: [0, -20, -40]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, // Faster bubbles for faster ship
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                    className="w-1.5 h-1.5 bg-blue-brand/20 rounded-full blur-[2px]" 
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sequential Wake Reveal (Above the Ship) */}
          <div className="absolute inset-x-0 top-0 bottom-[40%] flex justify-between items-start px-[8%] lg:px-[12%] pointer-events-none">
            {wakePhrases.map((phrase, i) => {
              // Precise synchronization with 8.5s journey
              const revealPoint = (i / (wakePhrases.length - 1)) * 0.85; 
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={inView ? { 
                    opacity: [0, 0, 1, 1], 
                    y: [30, 30, 0, 0], 
                    scale: [0.8, 0.8, 1.15, 1]
                  } : { opacity: 0 }}
                  transition={{ 
                    duration: 8.5, 
                    repeat: Infinity, 
                    times: [0, revealPoint, revealPoint + 0.05, 1],
                    ease: "easeInOut"
                  }}
                  className="flex flex-col items-center gap-4 pt-4"
                >
                  <motion.div
                    animate={inView ? {
                      rotate: [0, -15, 15, 0],
                      scale: [1, 1.25, 1.25, 1]
                    } : {}}
                    transition={{
                      duration: 8.5,
                      repeat: Infinity,
                      times: [0, revealPoint, revealPoint + 0.03, 1]
                    }}
                    className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center border border-slate-100 transition-colors duration-300"
                  >
                    <Anchor className="w-5 h-5 lg:w-6 lg:h-6 text-blue-brand" />
                  </motion.div>
                  <span className="text-[10px] lg:text-xs font-black text-navy uppercase tracking-[0.2em] whitespace-nowrap drop-shadow-sm px-2">
                    {phrase}
                  </span>
                  
                  {/* Subtle water ripple effect */}
                  <motion.div 
                    animate={{ scaleX: [0, 1.4, 0.9], opacity: [0, 0.4, 0] }}
                    transition={{ duration: 2.5, delay: revealPoint * 8.5, repeat: Infinity }}
                    className="w-full h-[1.5px] bg-blue-brand/25 mt-1"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
