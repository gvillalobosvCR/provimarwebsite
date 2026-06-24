"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight, MessageCircle, Phone, Clock, Anchor } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-28 bg-navy relative overflow-hidden">
      {/* Decorative shapes for high-end feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-brand/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-light/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Corporate grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 px-5 py-2.5 rounded-full text-sm font-semibold mb-10 shadow-xl backdrop-blur-sm"
          >
            <Anchor className="w-4 h-4 text-blue-light" />
            Ready for Departure
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            Streamline Your Vessel <span className="text-blue-light">Supply Chain</span>
          </h2>

          <p className="text-xl text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
            Contact Provimar today for a comprehensive quotation. Fast, professional, and reliable
            service for every major Costa Rican port.
          </p>

          {/* Contact Actions Grid */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-red-cta hover:bg-red-hover text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgba(230,57,70,0.4)] hover:shadow-[0_12px_40px_rgba(230,57,70,0.6)] hover:scale-105 text-lg"
            >
              <Mail className="w-5 h-5" />
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/50687245880?text=Hello%20Provimar%2C%20I%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 text-lg backdrop-blur-md"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp Us
            </a>

            <a
              href="tel:+50621017937"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white/70 hover:text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>

          {/* Service Promises */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { label: "Response", value: "2-4 Hours", icon: Clock },
              { label: "Operation", value: "24/7 Service", icon: Anchor },
              { label: "Network", value: "All CR Ports", icon: Anchor },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl py-6 px-4 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl font-display font-bold text-white mb-1.5">
                  {stat.value}
                </div>
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
