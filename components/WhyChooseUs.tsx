"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Award, Clock, Globe, Shield, Zap, Users,
  CheckCircle2, ArrowRight, Ship, Mail, Anchor
} from "lucide-react";

const stats = [
  { target: 30, label: "Years Experience", suffix: "+", icon: Award },
  { target: 10000, label: "Vessels Served", suffix: "+", icon: Ship },
  { target: 4, label: "Avg. Response (Hrs)", suffix: "h", icon: Clock },
];

const reasons = [
  {
    id: "24-7",
    icon: Clock,
    title: "24/7 Availability",
    description: "Our operations team remains ready round-the-clock for urgent requests and last-minute maritime requirements.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    id: "fast",
    icon: Zap,
    title: "Fast Response",
    description: "Quotations delivered within 2-4 hours and efficient logistics processing for tight vessel schedules.",
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
  },
  {
    id: "coverage",
    icon: Globe,
    title: "All Port Coverage",
    description: "Comprehensive supply services available across all Pacific and Caribbean ports in Costa Rica.",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-50",
  },
  {
    id: "quality",
    icon: Award,
    title: "Certified Quality",
    description: "High-quality provisions and technical stores sourced from trusted, certified suppliers worldwide.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
  },
  {
    id: "reliable",
    icon: Shield,
    title: "Reliable Service",
    description: "Durable partnership focused on integrity, transparency, and consistent operational excellence.",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-50",
  },
  {
    id: "centric",
    icon: Users,
    title: "Customer Centric",
    description: "Tailored solutions for ship management companies, agents, and captains worldwide.",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
];

function StatItem({ target, label, suffix, icon: Icon, index }: any) {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 bg-slate-50/50 rounded-2xl border border-white shadow-sm"
    >
      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-blue-brand" />
      </div>
      <div className="text-3xl font-display font-extrabold text-navy leading-none mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

function FeatureCard({ reason, index, onHover, isHighlighted }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      whileHover={{
        y: -12,
        boxShadow: "0 30px 60px -12px rgba(10, 61, 98, 0.12), 0 18px 36px -18px rgba(10, 61, 98, 0.15)",
      }}
      className="relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-400 group cursor-default h-full"
    >
      {/* Nautical Rope Border and Ship Wheel */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
        {/* Ship Wheel (Helm) Integrated into the Top Border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50">
          <motion.div
            animate={{ rotate: isHighlighted ? 90 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-sm"
            >
              {/* Detailed Ship Wheel / Helm SVG */}
              <circle cx="12" cy="12" r="2" fill={isHighlighted ? "#1B6CA8" : "#A67B5B"} className="transition-colors duration-500" />
              <circle cx="12" cy="12" r="5" stroke={isHighlighted ? "#1B6CA8" : "#A67B5B"} strokeWidth="1.2" className="transition-colors duration-500" />
              <circle cx="12" cy="12" r="8" stroke={isHighlighted ? "#1B6CA8" : "#A67B5B"} strokeWidth="1.2" className="transition-colors duration-500" />

              <g stroke={isHighlighted ? "#1B6CA8" : "#A67B5B"} strokeWidth="2" strokeLinecap="round" className="transition-colors duration-500">
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </g>
            </svg>
          </motion.div>
        </div>

        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <pattern
              id={`rope-pattern-${index}`}
              width="20"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(25)"
            >
              <rect width="20" height="10" fill={isHighlighted ? "#1B6CA8" : "#D2B48C"} className="transition-colors duration-500" />
              <path d="M-5 0 L25 10 M-5 5 L25 15 M-5 -5 L25 5" stroke={isHighlighted ? "#0A3D62" : "#A67B5B"} strokeWidth="3" opacity="0.6" className="transition-colors duration-500" />
            </pattern>
          </defs>

          {/* Main Rope Border Layer */}
          <rect
            x="3"
            y="3"
            width="calc(100% - 6px)"
            height="calc(100% - 6px)"
            rx="24"
            fill="none"
            stroke={`url(#rope-pattern-${index})`}
            strokeWidth="6"
            className={`transition-all duration-500 ${isHighlighted ? 'opacity-100' : 'opacity-40'}`}
          />
        </svg>
      </div>

      {/* Clipped background elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-brand/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="relative z-10">
        <div className={`w-16 h-16 ${reason.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
          <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-blue-brand transition-colors duration-300">
          {reason.title}
        </h3>
        <p className="text-slate-500 leading-relaxed font-medium">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const inView = useInView(headerRef, { once: true });

  return (
    <section className="py-28 bg-white relative overflow-hidden" id="why-partner">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-48 -left-20 w-96 h-96 bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-48 -right-20 w-96 h-96 bg-red-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} index={i} />
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="label-pill mb-6 shadow-sm mx-auto">
            <CheckCircle2 className="w-4 h-4 text-blue-brand" /> Why Partner With Us?
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-navy mb-8 tracking-tight text-balance">
            The Trustworthy Choice for <span className="text-blue-brand">Vessel Supply</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Provimar delivers operational excellence by combining local maritime expertise
            with international shipping standards.
          </p>
        </motion.div>

        {/* Features Grid - Connected by Rope */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-24">
          {reasons.map((r, i) => (
            <FeatureCard
              key={r.id}
              reason={r}
              index={i}
              onHover={setHighlightedIndex}
              isHighlighted={highlightedIndex === i}
            />
          ))}
        </div>

        {/* Conversion CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-red-cta hover:bg-red-hover text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-[0_12px_30px_rgba(230,57,70,0.4)] hover:shadow-red-glow hover:scale-105 text-lg"
          >
            <Mail className="w-6 h-6" />
            Request a Quote Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <p className="mt-6 text-slate-400 text-sm font-medium">
            Join 500+ vessels who trust Provimar every year.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
