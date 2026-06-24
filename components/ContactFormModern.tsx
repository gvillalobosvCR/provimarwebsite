"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Ship, Calendar, MapPin, Hash, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ports = ["Puerto Caldera", "Puerto Limón", "Puerto Moín", "Golfito", "Marina Pez Vela (Quepos)", "Marina Papagayo", "Other"];

export default function ContactFormModern() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mqeggbng", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        // Reset status after 10 seconds to allow for another request
        setTimeout(() => setStatus("idle"), 10000);
      } else {
        const result = await response.json();
        console.error("Formspree Error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100 overflow-hidden">
      <div className="p-8 md:p-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote</h3>
          <p className="text-slate-500">Provide your vessel details and we&apos;ll handle the rest.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Vessel Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <Ship className="w-3.5 h-3.5 text-blue-600" />
                Vessel Name
              </label>
              <input
                required
                name="vessel_name"
                type="text"
                placeholder="e.g. MV Oceanic"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* IMO Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <Hash className="w-3.5 h-3.5 text-blue-600" />
                IMO Number
              </label>
              <input
                required
                name="imo_number"
                type="text"
                placeholder="e.g. 9876543"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Contact Email Row */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              Contact Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="operator@company.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Port of Call */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Port of Call
              </label>
              <select
                required
                name="port_of_call"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 appearance-none"
              >
                <option value="">Select Port</option>
                {ports.map((port) => (
                  <option key={port} value={port}>{port}</option>
                ))}
              </select>
            </div>

            {/* ETA */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                Estimated Arrival (ETA)
              </label>
              <input
                required
                name="eta"
                type="date"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900"
              />
            </div>
          </div>

          {/* Required Items */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
              Required Items / Services
            </label>
            <textarea
              required
              name="items_requested"
              rows={4}
              placeholder="List the provisions, stores, or services you need..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`w-full relative py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 overflow-hidden ${
              status === "success" 
                ? "bg-green-500" 
                : status === "error"
                  ? "bg-red-500"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
            }`}
          >
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2"
                >
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </motion.div>
              ) : status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Request Sent!</span>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Submission Failed</span>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Quotation Request</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            {(status === "idle" || status === "error") && (
              <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
            )}
          </button>

          {status === "success" ? (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-green-600"
            >
              We&apos;ll get back to you within 2-4 hours. Check your email!
            </motion.p>
          ) : status === "error" ? (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-red-600"
            >
              Something went wrong. Please try again or email us directly.
            </motion.p>
          ) : null}

        </form>
      </div>
    </div>
  );
}
