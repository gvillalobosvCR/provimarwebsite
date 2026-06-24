import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortsCoverage from "@/components/PortsCoverage";
import Certifications from "@/components/Certifications";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortsCoverage />
      <Certifications />
      <CTASection />
    </>
  );
}
