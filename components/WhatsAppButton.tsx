"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/50687245880?text=Hello%20Provimar%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20vessel.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] group flex items-center gap-3"
    >
      {/* Label Tooltip */}
      <span className="bg-white/90 backdrop-blur-md text-green-600 font-bold px-4 py-2 rounded-full shadow-xl border border-green-100 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 hidden md:block">
        Chat with us now
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-whatsapp"></div>
        
        <div className="relative w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 group-hover:rotate-12 transition-transform duration-300">
          <MessageCircle className="w-8 h-8" />
        </div>
      </div>
    </motion.a>
  );
}
