"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  FileText, 
  MailCheck, 
  BadgeCheck, 
  Ship, 
  Anchor, 
  Waves, 
  CircleCheck 
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Request Quote",
    description: "Submit your vessel's requirements via our platform or email.",
    icon: FileText,
    color: "from-blue-brand to-blue-light",
  },
  {
    id: "02",
    title: "Receive Quote",
    description: "Get a detailed, transparent proposal within hours of your request.",
    icon: MailCheck,
    color: "from-blue-brand to-blue-light",
  },
  {
    id: "03",
    title: "Confirm Order",
    description: "Approval of the quote triggers our logistics and supply chain.",
    icon: BadgeCheck,
    color: "from-blue-brand to-blue-light",
  },
  {
    id: "04",
    title: "Delivery",
    description: "On-time delivery directly to your vessel at any Costa Rican port.",
    icon: Ship,
    color: "from-blue-brand to-blue-light",
  },
];

export default function HowWeWork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // SVG Path for the connecting line (Horizontal)
  const desktopPath = "M 50 150 Q 250 80 450 150 Q 650 220 850 150";
  // SVG Path for the connecting line (Vertical)
  const mobilePath = "M 50 50 Q 120 250 50 450 Q -20 650 50 850";

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-blue-brand/20 blur-[1px]" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-blue-brand/20 blur-[1px]" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-blue-brand/20 blur-[1px]" />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, y: 0 }}
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5 
            }}
            className="absolute rounded-full bg-blue-brand/10 blur-2xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${i * 15}%`,
              top: `${(i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="label-pill mb-6 inline-flex"
          >
            <Anchor className="w-4 h-4" /> Operational Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6"
          >
            How We <span className="text-blue-brand">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-medium"
          >
            A seamless maritime supply process designed for speed, transparency, and reliability across all Costa Rican ports.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto min-h-[400px]">
          {/* Connecting Curved Line (Desktop: Horizontal, Mobile: Hidden/Vertical) */}
          {!isMobile && (
            <div className="absolute inset-0 flex items-center justify-center top-[-100px] pointer-events-none">
              <svg 
                viewBox="0 0 900 300" 
                className="w-full h-full stroke-blue-brand/10 fill-none"
                style={{ filter: "drop-shadow(0 0 8px rgba(27,108,168,0.05))" }}
              >
                {/* Static Path */}
                <path d={desktopPath} strokeWidth="3" strokeDasharray="8 8" />
                
                {/* Drawing Path Animation */}
                <motion.path
                  d={desktopPath}
                  strokeWidth="3"
                  className="stroke-blue-brand"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                />

                {/* Constant Glowing Dot Motion */}
                <motion.circle r="6" className="fill-blue-brand shadow-lg">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path={desktopPath}
                  />
                </motion.circle>
                <motion.circle r="12" className="fill-blue-brand opacity-20">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path={desktopPath}
                  />
                </motion.circle>
              </svg>
            </div>
          )}

          {/* Cards Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-card-xl transition-all duration-400 group"
                >
                  {/* Step Number Badge */}
                  <div className={`absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-display font-black text-xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300`}>
                    {step.id}
                  </div>

                  {/* Icon Container */}
                  <div className="mb-8 relative">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-brand transition-colors duration-400">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8, ease: "anticipate" }}
                      >
                        <Icon className="w-8 h-8 text-blue-brand group-hover:text-white transition-colors duration-400" />
                      </motion.div>
                    </div>
                    {/* Pulsing ring behind icon */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-brand/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-blue-brand transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile-only connector check icon */}
                  <div className="lg:hidden absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-blue-brand/40">
                    <CircleCheck className="w-8 h-8 fill-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Wave Pattern Background */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none">
        <Waves className="w-full h-full text-blue-brand stroke-[0.5]" />
      </div>
    </section>
  );
}
