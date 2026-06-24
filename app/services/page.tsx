import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Anchor } from "lucide-react";
import CTASection from "@/components/CTASection";
import HowWeWork from "@/components/HowWeWork";

export const metadata: Metadata = {
  title: "Our Services - Provimar Ship Suppliers",
  description: "Comprehensive ship supply services in Costa Rica: provisions, bonded stores, hardware, safety equipment, lubricants, repairs and more.",
};

const services = [
  {
    title: "Provisions",
    description: "Fresh & frozen: meat, dairy, bakery — cold chain guaranteed. We source high-quality products to meet your crew's dietary requirements.",
    features: ["Fresh fruits and vegetables", "Premium meats and seafood", "Dairy products and bakery items", "Frozen goods", "Dry stores and beverages"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800"
  },
  {
    title: "Bonded Store",
    description: "Cigars, beverages and duty-free items per regulations. Tax-free bonded stores for crew consumption with full customs documentation.",
    features: ["Cigarettes and tobacco", "Spirits and wines", "Beer and beverages", "Confectionery", "Duty-free items"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    title: "Hardware & Tools",
    description: "Marine paints, abrasives, welding, fasteners and more. Complete range of technical hardware for vessel maintenance and operations.",
    features: ["Marine paints and coatings", "Abrasives and grinding tools", "Welding equipment", "Fasteners and fittings", "Hand and power tools"],
    image: "https://provimarcr.com/img/hardware.jpg"
  },
  {
    title: "Marine Ropes",
    description: "Mooring lines, hawsers and rigging with certification. High-quality ropes and lines meeting international maritime standards.",
    features: ["Mooring lines", "Hawsers", "Rigging wire", "Synthetic ropes", "Certified equipment"],
    image: "https://madisonironandwood.com/cdn/shop/products/NauticalRope.jpg?v=1647272348&width=690"
  },
  {
    title: "Cleaning & Maintenance",
    description: "Chemicals, wipes, mops, brushes and janitorial solutions. Complete range of cleaning supplies to ensure vessel cleanliness.",
    features: ["Cleaning chemicals", "Mops and brushes", "Wipes and cloths", "Janitorial equipment", "Laundry products"],
    image: "https://thegoodshoppingguide.com/app/uploads/2022/05/Fast-Fashion-and-Ethical-Clothing-The-Good-Shopping-Guide-79.jpg"
  },
  {
    title: "Safety Equipment",
    description: "PPE, lifejackets, extinguishers and IMO signage. Full range of safety equipment to meet international maritime regulations.",
    features: ["Personal protective equipment", "Lifejackets and lifebuoys", "Fire extinguishers", "IMO signage", "First aid supplies"],
    image: "https://provimarcr.com/img/safety.jpg"
  },
  {
    title: "Diesel & Lubricants",
    description: "Coordinated bunkering and branded lubricants. We coordinate fuel supply and provide quality lubricants for all vessel machinery.",
    features: ["Diesel bunkering coordination", "Engine oils", "Hydraulic fluids", "Greases", "Branded lubricants"],
    image: "https://provimarcr.com/img/diesel.jpg"
  },
  {
    title: "Repairs & Mechanical",
    description: "Workshop coordination and technical assistance. We coordinate certified service providers for all your vessel's repair needs.",
    features: ["Engine repairs", "Electrical systems", "Hydraulic repairs", "Welding services", "Technical inspections"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800"
  },
  {
    title: "Waste & Fresh Water",
    description: "Garbage removal, sludge reception and fresh water supply. Complete waste management and water supply services at all Costa Rican ports.",
    features: ["Garbage collection", "Sludge reception", "Fresh water supply", "Waste documentation", "Environmental compliance"],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-maritime-900 text-white py-24 overflow-hidden">
        {/* Background Image with optimized overlay for visibility */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-maritime-950/80 via-black/20 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <Image 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
            alt="Our Services background"
            fill
            className="object-cover object-center scale-105 opacity-80"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white shadow-xl">
              <Anchor className="w-4 h-4 text-blue-300" />
              <span className="text-xs font-bold tracking-widest uppercase">Maritime Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl text-white font-medium max-w-2xl leading-relaxed drop-shadow-md opacity-90">
              Complete ship supply solutions for vessels calling at Costa Rican ports
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Anchor className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Dynamic How We Work Section */}
      <HowWeWork />

      <CTASection />
    </div>
  );
}
