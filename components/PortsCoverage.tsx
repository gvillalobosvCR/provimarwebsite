"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Anchor, Waves } from "lucide-react";

const ports = [
  { name: "Puerto Caldera", coast: "Pacific", desc: "Main commercial terminal" },
  { name: "Puerto Moín (APM)", coast: "Caribbean", desc: "Container specialists" },
  { name: "Limón", coast: "Caribbean", desc: "Heritage cargo port" },
  { name: "Quepos (Pez Vela)", coast: "Pacific", desc: "Premium marina & supply" },
  { name: "Puntarenas", coast: "Pacific", desc: "Historical supply hub" },
  { name: "Papagayo", coast: "Pacific", desc: "Luxury yacht support" },
  { name: "Herradura", coast: "Pacific", desc: "Central coast facility" },
  { name: "Golfito", coast: "Pacific", desc: "Southern gateway" },
];

function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-card">
      <div className="text-4xl font-display font-extrabold text-blue-brand mb-2">
        {count}
        <span className="text-blue-light">{label === "Experience" ? "+" : ""}</span>
      </div>
      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{label}</div>
    </div>
  );
}

function PortCard({ port, index, accentColor }: { port: (typeof ports)[0]; index: number; accentColor: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -6,
        boxShadow: "0 20px 40px rgba(10, 61, 98, 0.12), 0 0 20px rgba(27, 108, 168, 0.1)",
      }}
      className="relative bg-white p-5 rounded-xl border border-slate-100 hover:border-blue-200 transition-all duration-400 group cursor-default overflow-hidden"
    >
      {/* Dynamic Border Gradient on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 p-[1px] bg-gradient-to-r from-blue-brand to-red-cta rounded-xl" />
        <div className="absolute inset-[1px] bg-white rounded-[11px]" />
      </div>

      {/* Red Accent Bar (Left side) */}
      <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-red-cta transition-all duration-300 z-10" />

      <div className="relative z-20 flex items-center gap-4">
        {/* Animated Icon Container */}
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className={`w-10 h-10 rounded-lg ${accentColor === 'Pacific' ? 'bg-blue-50' : 'bg-blue-50'} flex items-center justify-center group-hover:bg-navy transition-colors duration-300`}
        >
          <MapPin className={`w-5 h-5 ${accentColor === 'Pacific' ? 'text-blue-brand' : 'text-blue-light'} group-hover:text-white transition-colors duration-300`} />
        </motion.div>

        <div>
          <h4 className="font-bold text-navy text-sm group-hover:text-blue-brand transition-colors duration-300">
            {port.name}
          </h4>
          <p className="text-slate-400 text-[11px] font-medium leading-tight">
            {port.desc}
          </p>
        </div>
      </div>
      
      {/* Subtle Blue Glow Effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function PortsCoverage() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  const pacificPorts = ports.filter((p) => p.coast === "Pacific");
  const caribbeanPorts = ports.filter((p) => p.coast === "Caribbean");

  return (
    <section className="py-28 bg-[#F5F7FA] relative overflow-hidden">
      {/* Official Costa Rica Map Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] pointer-events-none select-none z-0">
        <div className="relative w-full max-w-4xl aspect-[1.2] transform translate-y-12">
          <Image 
            src="http://provimarcr.com/img/costaricamap.svg" 
            alt="Costa Rica Map"
            fill
            className="w-full h-full object-contain"
            priority
          />
          
          {/* Pulsing Port Markers - Overlaying the Image */}
          <div className="absolute inset-0">
            {[
              { name: "Papagayo", x: "18%", y: "22%" },
              { name: "Puntarenas", x: "32%", y: "42%" },
              { name: "Caldera", x: "35%", y: "45%" },
              { name: "Herradura", x: "39%", y: "52%" },
              { name: "Quepos", x: "47%", y: "62%" },
              { name: "Golfito", x: "82%", y: "85%" },
              { name: "Limón", x: "85%", y: "35%" },
              { name: "Moín", x: "82%", y: "33%" },
            ].map((pin, i) => (
              <div key={i} style={{ left: pin.x, top: pin.y }} className="absolute -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: [0, 0.4, 0], scale: [1, 2.5, 3] } : {}}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                  className="w-8 h-8 rounded-full bg-blue-brand/30"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  className="w-3 h-3 rounded-full bg-blue-brand absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(27,108,168,0.6)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-brand/5 rounded-full blur-3xl opacity-50 z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-5xl mx-auto">
          <Counter target={30} label="Years Experience" />
          <Counter target={12} label="Ports Covered" />
          <Counter target={5000} label="Vessels Served" />
          <Counter target={24} label="Hours Availability" />
        </div>

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="label-pill mb-6">
            <Anchor className="w-4 h-4" /> Port Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
            Strategic Presence in <span className="text-blue-brand">Every Port</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Provimar operates across the entire Costa Rican coastline, ensuring your vessel is
            supplied wherever it berths with maximum efficiency.
          </p>
        </motion.div>

        {/* Coasts Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pacific Coast */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="p-3 bg-blue-brand rounded-xl text-white shadow-lg shadow-blue-900/10">
                <Waves className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-navy">Pacific Ocean Coast</h3>
              <div className="flex-1 h-px bg-slate-200 ml-4 opacity-50" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {pacificPorts.map((port, i) => (
                <PortCard key={i} port={port} index={i} accentColor="Pacific" />
              ))}
            </div>
          </motion.div>

          {/* Caribbean Coast */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="p-3 bg-blue-light rounded-xl text-white shadow-lg shadow-blue-500/10">
                <Waves className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-navy">Caribbean Sea Coast</h3>
              <div className="flex-1 h-px bg-slate-200 ml-4 opacity-50" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {caribbeanPorts.map((port, i) => (
                <PortCard key={i} port={port} index={i} accentColor="Caribbean" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
