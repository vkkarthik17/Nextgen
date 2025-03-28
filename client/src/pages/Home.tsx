import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SpecializationsSection from "@/components/home/SpecializationsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import ContactSection from "@/components/contact/ContactSection";

const Home = () => {
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
