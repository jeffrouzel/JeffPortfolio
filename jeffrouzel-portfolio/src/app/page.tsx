import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="pt-6 px-6">
        <Navbar />
      </div>
      <Hero/>
      <ContactFooter/>
      {/* Put Carousel tech stack here */}
    </div>
  );
}
