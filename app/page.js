import HeroSection from "@/components/sections/hero";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div>
      <div className="grid-background" />
      <HeroSection />
      <Features />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CTA />
    </div>
  );
}
