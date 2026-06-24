"use client";

import { useState, useEffect } from "react";
import { Mail, X, MessageCircle } from "lucide-react";

const MAILTO_LINK = "mailto:suppliers@provimarcr.com?subject=Quote Request&body=Vessel Name:%0AIMO:%0APort:%0AETA:%0ARequested Items:";
const WHATSAPP_LINK = "https://wa.me/50687245880?text=Hello%20Provimar%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20vessel.";

export default function FloatingEmailButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {isOpen && (
        <div className="flex flex-col gap-3 items-end">
          {/* WhatsApp Button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="text-sm whitespace-nowrap">WhatsApp (+506) 8724-5880</span>
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
          </a>

          {/* Email Button */}
          <a
            href={MAILTO_LINK}
            className="flex items-center gap-3 bg-maritime-600 hover:bg-maritime-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="text-sm whitespace-nowrap">Email us a Quote</span>
            <Mail className="w-5 h-5 flex-shrink-0" />
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-maritime-600 hover:bg-maritime-700"
        }`}
        aria-label="Contact options"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Mail className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
