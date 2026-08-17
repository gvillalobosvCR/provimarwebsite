import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock, Phone, MessageCircle, ArrowRight, Anchor } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://provimarcr.com/img/provimarfooter.jpg"
          alt="Port Background"
          fill
          className="object-cover opacity-40 grayscale brightness-75 transition-opacity duration-700"
          priority={false}
        />
        {/* Navy Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/40 to-navy/85" />
      </div>

      {/* Top accent accent border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-light via-blue-brand to-red-cta relative z-10" />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image
                src="https://provimarcr.com/logo-provimar.svg"
                alt="Provimar Ship Suppliers"
                width={180}
                height={60}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Providing professional ship supply and provisioning services in Costa Rica since
              1996. Quality, reliability, and excellence in every port.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10"
              >
                <div className="sr-only">Facebook</div>
                <div className="w-5 h-5 opacity-60">FB</div>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10"
              >
                <div className="sr-only">LinkedIn</div>
                <div className="w-5 h-5 opacity-60">LI</div>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-white mb-8 text-xs uppercase tracking-[0.2em] opacity-40">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/about", label: "About Provimar" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-all text-sm flex items-center gap-3 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Summary */}
          <div>
            <h3 className="font-bold text-white mb-8 text-xs uppercase tracking-[0.2em] opacity-40">
              Our Services
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "Provisions & Food Supply",
                "Bonded Stores",
                "Deck & Engine Hardare",
                "Chemicals & Maintenance",
                "Safety & PPE Equipment",
                "Technical Spares",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-white/60 hover:text-white/90 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-brand flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div id="footer-contact">
            <h3 className="font-bold text-white mb-8 text-xs uppercase tracking-[0.2em] opacity-40">
              Get in Touch
            </h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-light mt-0.5" />
                <div>
                  <p className="text-white/30 text-[10px] mb-1 font-bold uppercase tracking-wider">
                    Official Email
                  </p>
                  <a
                    href="mailto:suppliers@provimarcr.com"
                    className="text-white/80 hover:text-white font-semibold flex flex-col"
                  >
                    suppliers@provimarcr.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-light mt-0.5" />
                <div>
                  <p className="text-white/30 text-[10px] mb-1 font-bold uppercase tracking-wider">
                    Direct Operations
                  </p>
                  <a href="tel:+50621017937" className="text-white/80 hover:text-white font-semibold">
                    (+506) 2101-7937
                  </a>
                  <a
                    href="https://wa.me/50687245880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 font-bold block mt-1 hover:text-green-300 transition-colors"
                  >
                    WhatsApp: (+506) 8724-5880
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-blue-light mt-0.5" />
                <div>
                  <p className="text-white/30 text-[10px] mb-1 font-bold uppercase tracking-wider">
                    Operational State
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white font-bold opacity-90">24/7 Always Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Port Strip */}
        <div className="border-t border-white/5 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            <span>Caldera</span>
            <span className="opacity-40">•</span>
            <span>Limón</span>
            <span className="opacity-40">•</span>
            <span>Moín</span>
            <span className="opacity-40">•</span>
            <span>Quepos</span>
            <span className="opacity-40">•</span>
            <span>Puntarenas</span>
            <span className="opacity-40">•</span>
            <span>Papagayo</span>
            <span className="opacity-40">•</span>
            <span>Golfito</span>
          </div>
          <p className="text-white/20 text-xs font-medium">
            © {year} Provimar Ship Suppliers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
