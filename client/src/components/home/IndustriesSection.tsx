import { industries } from "@/data/industries";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, StaggeredAnimation } from "@/hooks/use-scroll-animation";
import { fadeIn, pulse } from "@/lib/animation";
import { useState } from "react";

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  
  // Industry card description content for hover states
  const industryDescriptions: Record<string, string> = {
    "oil-gas": "Specialized training for upstream, midstream, and downstream operations in the oil and gas sector.",
    "chemical": "Technical courses tailored for professionals in chemical manufacturing and processing industries.",
    "pharma": "Training programs aligned with quality standards and technical requirements of pharmaceutical manufacturing.",
    "plant": "Comprehensive courses covering all aspects of industrial plant design, maintenance, and operations.",
    "automobile": "Technical training focused on automotive design, manufacturing, and automation technologies.",
    "power": "Expert training for professionals in power generation, transmission, and distribution sectors."
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-100/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper
          variants={fadeIn(0.2, "down")}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-amber-500 uppercase mb-2 inline-block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-800 leading-tight">
            Industries <span className="text-primary">We Serve</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our training programs cater to professionals across multiple technical sectors
            with specialized curriculum designed for industry-specific challenges.
          </p>
        </ScrollAnimationWrapper>

        <StaggeredAnimation staggerDuration={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                onMouseEnter={() => setActiveIndustry(industry.id)}
                onMouseLeave={() => setActiveIndustry(null)}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                className="relative"
              >
                <motion.div 
                  className={`
                    rounded-2xl bg-white shadow-lg transition-all duration-300 overflow-hidden h-full
                    ${activeIndustry === industry.id ? 'ring-2 ring-primary ring-opacity-50' : ''}
                  `}
                  layout
                >
                  <div className="p-6 text-center flex flex-col items-center h-full">
                    <motion.div 
                      className={`
                        w-20 h-20 flex items-center justify-center mb-4 rounded-full
                        ${activeIndustry === industry.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}
                        transition-all duration-300
                      `}
                      animate={activeIndustry === industry.id ? { scale: 1.1 } : { scale: 1 }}
                    >
                      <industry.Icon className="h-10 w-10" />
                    </motion.div>
                    
                    <h3 className="font-semibold text-neutral-800 mb-2">{industry.name}</h3>
                    
                    {activeIndustry === industry.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-neutral-600 mt-1"
                      >
                        {industryDescriptions[industry.id]}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
                
                {/* Decorative bottom bar that animates on hover */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-amber-500 rounded-b-md"
                  initial={{ width: "0%" }}
                  animate={{ width: activeIndustry === industry.id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </StaggeredAnimation>
        
        <ScrollAnimationWrapper
          variants={fadeIn(0.5, "up")} 
          className="mt-16 p-6 bg-neutral-800 rounded-2xl text-white text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-3">Cross-Industry Expertise</h3>
          <p className="text-neutral-300">
            Our instructors bring real-world experience from these industries, ensuring that 
            the training you receive is practical, relevant, and immediately applicable to your career.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default IndustriesSection;
