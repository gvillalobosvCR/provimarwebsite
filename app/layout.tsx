import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Provimar Ship Suppliers — Marine Supply & Provisioning | Costa Rica",
  description:
    "Professional ship supply, provisioning, and logistics services in Costa Rica. Fast, reliable service for vessels at all Costa Rican ports. 24/7 support.",
  keywords:
    "ship supply, marine provisions, ship chandler, Costa Rica, vessel supply, maritime logistics, provisioning",
  openGraph: {
    title: "Provimar Ship Suppliers — Marine Supply & Provisioning",
    description:
      "Professional ship supply and provisioning services across all Costa Rican ports.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
