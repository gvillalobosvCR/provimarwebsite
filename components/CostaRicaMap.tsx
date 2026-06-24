"use client";

import { motion } from "framer-motion";
import { Anchor, MapPin } from "lucide-react";

const ports = [
  { name: "Puerto Caldera", x: "28%", y: "45%", side: "Pacific" },
  { name: "Puntarenas", x: "25%", y: "42%", side: "Pacific" },
  { name: "Puerto Limón", x: "78%", y: "48%", side: "Caribbean" },
  { name: "Puerto Moín (APM)", x: "75%", y: "45%", side: "Caribbean" },
  { name: "Golfito", x: "75%", y: "85%", side: "Pacific" },
  { name: "Marina Pez Vela", x: "42%", y: "65%", side: "Pacific" },
];

export default function CostaRicaMap() {
  return (
    <div className="relative w-full aspect-[4/3] bg-blue-50/50 rounded-3xl overflow-hidden border border-blue-100 shadow-inner group">
      {/* Background Stylized SVG Map - Simple Geometric Costa Rica */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full text-blue-200 fill-current opacity-40 group-hover:scale-105 transition-transform duration-700"
      >
        <path d="M120,400 L180,320 L280,280 L350,250 L420,240 L500,230 L580,250 L650,300 L720,380 L750,450 L700,520 L620,550 L500,530 L400,500 L300,520 L200,500 L120,400 Z" />
      </svg>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #002447 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Port Markers */}
      {ports.map((port, i) => (
        <motion.div
           key={port.name}
           initial={{ opacity: 0, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 * i, type: "spring" }}
           className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-help group/port"
           style={{ left: port.x, top: port.y }}
        >
          {/* Pulsing Outer Ring */}
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></div>
          
          {/* Marker Icon */}
          <div className="relative bg-white p-1.5 rounded-full shadow-lg border border-blue-200 text-blue-600 group-hover/port:bg-blue-600 group-hover/port:text-white transition-colors duration-300">
            <Anchor className="w-3 h-3 md:w-4 md:h-4" />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-slate-900 text-white text-[10px] md:text-xs font-bold rounded-lg opacity-0 group-hover/port:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl pointer-events-none translate-y-2 group-hover/port:translate-y-0">
            {port.name}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
          </div>
        </motion.div>
      ))}

      {/* Ocean Label */}
      <div className="absolute top-10 left-10 text-blue-900/10 font-bold text-4xl select-none pointer-events-none uppercase tracking-[1em]">
        Pacific
      </div>
      <div className="absolute bottom-10 right-10 text-blue-900/10 font-bold text-4xl select-none pointer-events-none uppercase tracking-[1em]">
        Caribbean
      </div>

      {/* Legend Card */}
      <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-sm hidden md:block">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-100"></div>
          <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Service Coverage</span>
        </div>
        <p className="text-[10px] text-slate-500 font-medium">All major Costa Rican ports 24/7</p>
      </div>
    </div>
  );
}
