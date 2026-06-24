"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Mail, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP =
  "https://wa.me/50687245880?text=Hello%20Provimar%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20vessel.";
const MAILTO =
  "mailto:suppliers@provimarcr.com?subject=Quote Request&body=Vessel Name:%0AIMO:%0APort:%0AETA:%0ARequested Items:";

const options = [
  {
    id: "float-whatsapp",
    href: WHATSAPP,
    label: "WhatsApp Chat",
    sub: "(+506) 8724-5880",
    icon: MessageCircle,
    bg: "bg-green-500 hover:bg-green-600",
    shadow: "shadow-green-500/20",
    external: true,
  },
  {
    id: "float-email",
    href: MAILTO,
    label: "Email Quotation",
    sub: "suppliers@provimarcr.com",
    icon: Mail,
    bg: "bg-blue-brand hover:bg-navy",
    shadow: "shadow-blue-brand/20",
    external: false,
  },
  {
    id: "float-phone",
    href: "tel:+50621017937",
    label: "Direct Call",
    sub: "(+506) 2101-7937",
    icon: Phone,
    bg: "bg-slate-700 hover:bg-slate-800",
    shadow: "shadow-slate-700/20",
    external: false,
  },
];

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fn = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4"
          id="floating-contact-container"
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-3 items-end"
              >
                {options.map((opt, i) => (
                  <motion.a
                    key={opt.id}
                    id={opt.id}
                    href={opt.href}
                    target={opt.external ? "_blank" : undefined}
                    rel={opt.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, x: -5 }}
                    className={`flex items-center gap-4 ${opt.bg} text-white px-5 py-3.5 rounded-2xl shadow-xl transition-all duration-300 border border-white/10`}
                  >
                    <div className="text-right">
                      <p className="text-sm font-bold leading-none">{opt.label}</p>
                      <p className="text-[10px] font-medium opacity-70 mt-1">{opt.sub}</p>
                    </div>
                    <opt.icon className="w-5 h-5 flex-shrink-0" />
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Button Toggle */}
          <motion.button
            id="float-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-card-xl transition-all duration-300 ${
              isOpen
                ? "bg-slate-900 text-white rotate-90"
                : "bg-green-500 text-white shadow-green-500/25"
            }`}
            aria-label="Toggle contact help"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                  <X className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div key="message" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                  <MessageCircle className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
