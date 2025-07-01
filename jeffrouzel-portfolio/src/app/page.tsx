import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import ContactFooter from "@/components/ContactFooter";
import TechStackCarousel from "@/components/TechStackCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="pt-6 px-6">
        <Navbar />
      </div>
      <Hero/>
      <TechStackCarousel/>
      <ContactFooter/>
    </div>
  );
}
