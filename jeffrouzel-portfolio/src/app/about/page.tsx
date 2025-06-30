import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-6">
      <Navbar/>
      <ContactFooter/>
    </div>
  );
}
