import { Metadata } from "next";
import Image from "next/image";
import { Ship, Award, Clock, Globe, Users, Target } from "lucide-react";
import CTASection from "@/components/CTASection";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "About Us - Provimar Ship Suppliers",
  description: "Learn about Provimar Ship Suppliers, your trusted partner for marine supply and provisioning services in Costa Rica.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-maritime-900 text-white py-24 overflow-hidden">
        {/* Background Image with optimized overlay for visibility */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-maritime-950/80 via-black/20 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <Image 
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065"
            alt="Marine Supply background"
            fill
            className="object-cover object-center scale-105 opacity-80"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-maritime-500/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white">
              <Ship className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium tracking-wide uppercase">About Provimar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
              Marine Supply <span className="text-blue-400">Experts</span>
            </h1>
            <p className="text-xl text-white font-medium max-w-2xl leading-relaxed drop-shadow-md opacity-90">
              Your trusted partner for comprehensive ship supply and provisioning services in Costa Rica
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-maritime-600">Provimar Ship Suppliers</strong> is a leading provider of comprehensive ship supply and provisioning services in Costa Rica. We specialize in delivering high-quality products and services to vessels calling at Costa Rican ports, ensuring that ships and their crews have everything they need for safe and efficient operations.
              </p>
              <p>
                With extensive experience in the maritime industry, we understand the unique challenges and time-sensitive nature of ship supply operations. Our team is dedicated to providing fast, reliable, and professional service to meet the demanding requirements of modern maritime logistics.
              </p>
              <p>
                We serve a diverse range of vessels including cargo ships, tankers, cruise ships, fishing vessels, and private yachts. Our comprehensive inventory and strong supplier network enable us to fulfill orders of any size, from routine provisions to specialized technical equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-blue-50 rounded-2xl p-8 flex gap-6 items-start">
              <div className="text-3xl flex-shrink-0">📋</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To satisfy the needs of the maritime industry in Costa Rica by providing high-quality products and reliable ship supply services, backed by efficiency, safety, and a commitment to operational excellence.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 flex gap-6 items-start">
              <div className="text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the most trusted and preferred ship supplier in Costa Rica, building long-term relationships through exceptional service, continuous improvement, and a strong dedication to our clients&#39; operational success.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 flex gap-6 items-start">
              <div className="text-3xl flex-shrink-0">💎</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Integrity, Passion, Leadership, Efficiency, Commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide our service excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Quality Assurance",
                  description: "We source only the highest quality products from trusted suppliers, ensuring that every item meets international standards and your expectations."
                },
                {
                  icon: Clock,
                  title: "Timely Service",
                  description: "We understand that time is critical in maritime operations. Our efficient processes ensure prompt quotations and on-time delivery to meet your vessel's schedule."
                },
                {
                  icon: Globe,
                  title: "Global Standards",
                  description: "We adhere to international maritime regulations and industry best practices, providing services that meet global standards for ship supply operations."
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  description: "Your satisfaction is our priority. We work closely with ship agents, captains, and logistics coordinators to understand and fulfill your specific requirements."
                },
                {
                  icon: Target,
                  title: "Reliability",
                  description: "Count on us for consistent, dependable service. We build long-term relationships based on trust, transparency, and delivering on our commitments."
                },
                {
                  icon: Ship,
                  title: "Industry Expertise",
                  description: "Our team's deep knowledge of maritime operations and local regulations ensures smooth, hassle-free service for every vessel we supply."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-maritime-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-maritime-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Provimar?
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Comprehensive Product Range",
                  description: "From fresh provisions to technical stores, safety equipment to bonded goods, we supply everything your vessel needs."
                },
                {
                  title: "Local Expertise",
                  description: "Deep knowledge of Costa Rican ports, customs procedures, and local regulations ensures smooth operations and compliance."
                },
                {
                  title: "24/7 Availability",
                  description: "Round-the-clock service means we're always ready to handle urgent requests and last-minute requirements."
                },
                {
                  title: "Competitive Pricing",
                  description: "Strong supplier relationships and efficient operations allow us to offer competitive prices without compromising quality."
                },
                {
                  title: "Professional Documentation",
                  description: "Complete and accurate documentation for all supplies, ensuring compliance with maritime regulations and customs requirements."
                },
                {
                  title: "Flexible Payment Terms",
                  description: "We work with established ship agents and operators to provide convenient payment arrangements."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-maritime-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-maritime-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Serving Costa Rican Ports
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We provide comprehensive ship supply services to vessels calling at all major Costa Rican ports, including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                {
                  port: "Puerto Caldera",
                  description: "Pacific - Major commercial port"
                },
                {
                  port: "Punta Morales",
                  description: "Pacific - Port facility"
                },
                {
                  port: "Los Sueños Marina",
                  description: "Pacific - Premier marina resort"
                },
                {
                  port: "Marina Pez Vela (Quepos)",
                  description: "Pacific - Modern marina"
                },
                {
                  port: "Marina Papagayo",
                  description: "Pacific - Luxury marina"
                },
                {
                  port: "Golfito",
                  description: "Pacific - Southern port"
                },
                {
                  port: "Puntarenas",
                  description: "Pacific - Historic port city"
                },
                {
                  port: "Bahía Ballena",
                  description: "Pacific - Whale Bay marina"
                },
                {
                  port: "Limón",
                  description: "Caribbean - Largest port"
                },
                {
                  port: "Puerto Moín (APM)",
                  description: "Caribbean - Container terminal"
                },
                {
                  port: "Muelle Alemán",
                  description: "Caribbean - German Dock"
                },
                {
                  port: "Caribbean Marina",
                  description: "Caribbean - Marina facility"
                }
              ].map((port, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-maritime-600 mb-2">
                    {port.port}
                  </h3>
                  <p className="text-gray-600">{port.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <CTASection />
    </div>
  );
}
