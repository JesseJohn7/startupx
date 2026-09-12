import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Applications from "@/components/Applications"
import Pricing from "@/components/Pricing"
export default function Home() {
  return (
    <> 
    <Navbar />
    <Hero />
    <Applications />
    <Pricing/>
    </>
  );
}
