"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const certs = [
  {
    src: "https://provimarcr.com/img/pyme.svg",
    alt: "PYME Costa Rica",
    label: "PYME Costa Rica",
    desc: "Certified Small & Medium Enterprise",
  },
  {
    src: "https://castellamar.com/wp-content/uploads/2021/05/issa-png1.png",
    alt: "ISSA Member",
    label: "ISSA Member",
    desc: "International Ship Suppliers Association",
  },
  {
    src: "https://smartbusinesseg.com/wp-content/uploads/2018/04/ISO-Logo-22000-2005-2-01-300x300.png",
    alt: "ISO 22000 Certified",
    label: "ISO 22000:2005",
    desc: "Food Safety Management",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="label-pill mb-6">
            <ShieldCheck className="w-4 h-4" /> Trusted & Certified
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
            Our Quality <span className="text-blue-brand">Standards</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Provimar is committed to the highest standards of safety and reliability, verified by
            national and international bodies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-100 hover:border-blue-100 rounded-3xl p-10 flex flex-col items-center gap-6 w-full sm:w-72 shadow-card hover:shadow-card-lg transition-all duration-300 group"
            >
              <div className="relative w-32 h-32 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <div className="text-center pt-2">
                <h4 className="font-bold text-navy text-sm mb-2 group-hover:text-blue-brand transition-colors">
                  {cert.label}
                </h4>
                <p className="text-slate-400 text-xs font-medium leading-tight">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
