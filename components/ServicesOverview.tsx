"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Anchor } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Provisions",
    description: "Fresh & frozen: meat, dairy, bakery — cold chain guaranteed.",
    tag: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
  },
  {
    title: "Bonded Store",
    description: "Cigars, beverages and duty-free items per regulations.",
    tag: "Duty-Free",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
  },
  {
    title: "Hardware & Tools",
    description: "Marine paints, abrasives, welding, fasteners and more.",
    tag: "Deck & Engine",
    image: "https://provimarcr.com/img/hardware.jpg",
  },
  {
    title: "Marine Ropes",
    description: "Mooring lines, hawsers and rigging with certification.",
    tag: "Rigging",
    image:
      "https://madisonironandwood.com/cdn/shop/products/NauticalRope.jpg?v=1647272348&width=690",
  },
  {
    title: "Cleaning & Maintenance",
    description: "Chemicals, wipes, mops, brushes and janitorial solutions.",
    tag: "Cabin Stores",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800",
  },
  {
    title: "Safety Equipment",
    description: "PPE, lifejackets, extinguishers and IMO signage.",
    tag: "Safety",
    image: "https://provimarcr.com/img/safety.jpg",
  },
  {
    title: "Diesel & Lubricants",
    description: "Coordinated bunkering and branded lubricants.",
    tag: "Fuel & Oil",
    image: "https://provimarcr.com/img/diesel.jpg",
  },
  {
    title: "Repairs & Mechanical",
    description: "Workshop coordination and technical assistance.",
    tag: "Technical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-xl transition-all duration-400 group cursor-default"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue- brand bg-white/95 px-3 py-1.5 rounded-lg shadow-sm border border-blue-50">
            {service.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-blue-brand transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
        <div className="flex items-center gap-2 text-blue-brand font-bold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
          More Info <ArrowRight className="w-3 h-3" />
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="h-1 bg-gradient-to-r from-blue-brand to-blue-light scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </motion.div>
  );
}

export default function ServicesOverview() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section className="py-28 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="label-pill mb-6">
            <Anchor className="w-4 h-4" /> Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
            Everything Your <span className="text-blue-brand whitespace-nowrap">Vessel Needs</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            From provisions to technical spares, we provide end-to-end supply solutions for the
            modern maritime industry.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-red-cta hover:bg-red-hover text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-red-glow hover:shadow-lg hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
