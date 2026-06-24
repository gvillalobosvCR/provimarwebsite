"use client";

import { Mail, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Globe, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactFormModern from "@/components/ContactFormModern";
import CostaRicaMap from "@/components/CostaRicaMap";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

const contactCards = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "We work around the clock. Your vessel never waited, and neither do we.",
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description: "Full compliance with maritime regulations and ISO standards.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Average quotation turnaround in less than 3 hours.",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Lightened and Clear */}
      <section className="relative min-h-[45vh] flex items-center bg-maritime-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-maritime-950/90 via-black/30 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <Image 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070"
            alt="Contact background"
            fill
            className="object-cover object-center scale-105 opacity-80"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">Available 24/7</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">
              Contact <span className="text-blue-400">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium max-w-2xl leading-relaxed drop-shadow-md opacity-90">
              We’re ready to supply your vessel anytime. Get your quote fast, reliable, and hassle-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 -mt-16 relative z-30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - Form & Quick CTAs */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ContactFormModern />
              </motion.div>

              {/* Direct CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a 
                  href="https://wa.me/50687245880"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a 
                  href="mailto:suppliers@provimarcr.com"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a 
                  href="tel:+50621017937"
                  className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Column - Map & Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Service Area Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">Service Area</h2>
                    <p className="text-slate-500 font-medium">Coverage in all major ports</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <CostaRicaMap />
              </motion.div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-1 gap-4">
                {contactCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
                  >
                    <div className={`${card.bg} p-3 rounded-xl transition-colors duration-300`}>
                      <card.icon className={`w-6 h-6 ${card.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Company Info Box */}
              <div className="p-8 bg-maritime-900 rounded-3xl text-white space-y-6 shadow-2xl shadow-maritime-900/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Our Offices</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                      <p className="text-maritime-50">Caldera, Turrucares, Limón.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <p className="text-maritime-50 font-bold">(+506) 2101-7937</p>
                    </div>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhatsAppButton />
      <CTASection />
    </div>
  );
}
