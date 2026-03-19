import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <Gallery />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
