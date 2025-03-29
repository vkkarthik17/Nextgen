import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SpecializationsSection from "@/components/home/SpecializationsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import ContactSection from "@/components/contact/ContactSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = element.dataset.speed || '0.1';
        const translateY = scrollY * parseFloat(speed);
        element.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SpecializationsSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <ContactSection />
    </div>
  );
};

export default Home;
