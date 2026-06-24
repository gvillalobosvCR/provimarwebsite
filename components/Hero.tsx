"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Ship, Clock, Award, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const HEADLINES = [
  { plain: "Professional", accent: "Ship Supply." },
  { plain: "Reliable", accent: "Provisioning." },
  { plain: "Expert", accent: "Logistics." },
];

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  useEffect(() => {
    const t = setInterval(() => setHeadlineIndex((i) => (i + 1) % HEADLINES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const features = [
    { icon: Clock, title: "24/7 Service", description: "Round-the-clock availability" },
    { icon: Ship, title: "All CR Ports", description: "Pacific & Caribbean coverage" },
    { icon: Award, title: "Fast Response", description: "Quotes within 2–4 hours" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* ── Background: bright port image ─────────────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=85&w=2070&auto=format&fit=crop"
          alt="Port logistics with cranes and cargo"
          fill
          className="w-full h-full object-cover brightness-[1.0] contrast-[1.05] saturate-[1.1]"
          priority
        />
      </motion.div>

      {/* ── Overlays ────────────────────────────────────────────────── */}
      {/* Subtle blue/white tint: ensures overall "Light" theme without a heavy wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-transparent" />
      {/* Bottom fade into white for section below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/20 to-transparent" />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY }}
        className="container mx-auto px-4 lg:px-12 relative z-10 pt-28 pb-20"
      >
        <div className="max-w-4xl">
          {/* ── The "Enclosed" Glassmorphism Card ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 md:p-14 shadow-[0_32px_64px_-16px_rgba(10,61,98,0.15)] overflow-hidden"
          >
            {/* Subtle inner accent glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-brand/40 via-blue-light/20 to-transparent" />
            
            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-blue-brand text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-10 shadow-lg shadow-blue-900/20"
              >
                <Ship className="w-4 h-4" />
                Professional Ship Supply · Costa Rica
              </motion.div>

              {/* Animated headline */}
              <div className="mb-8" style={{ minHeight: "8.5rem" }}>
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight"
                  >
                    <span className="text-navy">{HEADLINES[headlineIndex].plain} </span>
                    <span className="text-blue-brand">{HEADLINES[headlineIndex].accent}</span>
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-slate-700/80 mb-14 leading-relaxed font-medium max-w-xl"
              >
                Providing fast, reliable provisioning and logistics for vessels calling at any{" "}
                <span className="text-navy font-bold underline decoration-blue-brand/30 decoration-4 underline-offset-4">Costa Rican port</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-5 mb-16"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-red-cta hover:bg-red-hover text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_12px_24px_-6px_rgba(230,57,70,0.4)] hover:shadow-red-glow hover:scale-[1.03] text-base"
                >
                  <Mail className="w-5 h-5" />
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-3 bg-white/80 hover:bg-white text-navy font-bold py-5 px-10 rounded-2xl transition-all duration-300 border border-slate-200 hover:border-blue-brand hover:scale-[1.03] text-base shadow-sm backdrop-blur-md"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>

              {/* Feature pills (Simplified for inside card) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap gap-6 pt-10 border-t border-slate-200/50"
              >
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-brand">
                      <f.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-navy font-bold text-[11px] uppercase tracking-wider">{f.title}</p>
                      <p className="text-slate-500 text-[10px] font-medium">{f.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-[10px] font-bold tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-blue-brand/50"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
