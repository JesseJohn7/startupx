import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Applications from "@/components/Application"
import Pricing from "@/components/Pricing"
import Faqs from "@/components/Faqs"
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <> 
    <Navbar />
    <Hero />
    <Applications />
    <Testimonials/>
    <Pricing/>
    <Faqs/>
    <Footer/>
    </>
  );
}
