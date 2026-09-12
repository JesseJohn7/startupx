import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Applications from "@/components/Application"
import Pricing from "@/components/Pricing"
import Faqs from "@/components/Faqs"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <> 
    <Navbar />
    <Hero />
    <Applications />
    <Pricing/>
    <Faqs/>
    <Footer/>
    </>
  );
}
