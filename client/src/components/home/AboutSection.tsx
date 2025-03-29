import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "@/hooks/use-scroll-animation";
import { fadeIn, slideIn } from "@/lib/animation";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 opacity-5">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="100" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "right")}>
            <div className="rounded-2xl overflow-hidden shadow-xl transform parallax-element" data-speed="0.03">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Nextgen Training" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white parallax-element" data-speed="-0.04">
                  <span className="bg-primary text-white text-xs md:text-sm px-3 py-1 rounded-full">Established 2010</span>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper variants={fadeIn(0.3, "left")}>
            <div className="flex flex-col h-full justify-center">
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-4">
                About Nextgen
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-800">
                Empowering <span className="text-primary">Future-Ready</span> Technical Professionals
              </h2>
              <p className="text-base md:text-lg text-neutral-600 mb-6">
                Since 2010, Nextgen has been at the forefront of technical education, specializing in engineering design, 
                process simulation, advanced programming, and professional skill development.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4">
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-primary font-bold text-3xl md:text-4xl mb-1">10+</div>
                  <div className="text-neutral-700 font-medium">Years of Excellence</div>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-primary font-bold text-3xl md:text-4xl mb-1">50+</div>
                  <div className="text-neutral-700 font-medium">Expert Instructors</div>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-primary font-bold text-3xl md:text-4xl mb-1">5000+</div>
                  <div className="text-neutral-700 font-medium">Trained Professionals</div>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-primary font-bold text-3xl md:text-4xl mb-1">150+</div>
                  <div className="text-neutral-700 font-medium">Industry Partners</div>
                </div>
              </div>
              
              <div className="mt-8">
                <motion.button
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 md:py-3 px-6 md:px-8 rounded-full inline-flex items-center text-sm md:text-base mr-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                </motion.button>
                <motion.button
                  className="border border-primary text-primary hover:bg-primary/5 font-medium py-2.5 md:py-3 px-6 md:px-8 rounded-full inline-flex items-center text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet Our Team
                </motion.button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
