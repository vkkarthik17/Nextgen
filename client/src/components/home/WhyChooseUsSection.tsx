import { Card, CardContent } from "@/components/ui/card";
import {
  PlacementIcon,
  InstructorsIcon,
  HandsOnIcon,
  CurriculumIcon,
  SupportIcon,
  CertificationIcon,
} from "@/components/ui/icons";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "@/hooks/use-scroll-animation";
import { fadeIn, scaleIn } from "@/lib/animation";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const reasons = [
  {
    id: "placement",
    title: "Placement Guarantee & Assistance",
    description: "We ensure career opportunities through our extensive industry network and placement support.",
    Icon: PlacementIcon,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
    image: "https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "instructors",
    title: "Industry-Experienced Instructors",
    description: "Learn from professionals with years of hands-on experience in their respective fields.",
    Icon: InstructorsIcon,
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-600",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hands-on",
    title: "Hands-On Training",
    description: "Practical, project-based learning that prepares you for real-world challenges and applications.",
    Icon: HandsOnIcon,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600",
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "curriculum",
    title: "Comprehensive Curriculum",
    description: "Thoughtfully designed coursework that covers both fundamentals and advanced topics.",
    Icon: CurriculumIcon,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "support",
    title: "Ongoing Support",
    description: "Continuous guidance during and after training to ensure your professional success.",
    Icon: SupportIcon,
    bgColor: "bg-rose-500/10",
    iconColor: "text-rose-600",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "certification",
    title: "Industry-Recognized Certification",
    description: "Receive certifications that enhance your resume and validate your expertise.",
    Icon: CertificationIcon,
    bgColor: "bg-teal-500/10",
    iconColor: "text-teal-600",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const WhyChooseUsSection = () => {
  const [hoveredReason, setHoveredReason] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-20 opacity-10">
          <svg width="250" height="250" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[400px] md:h-[400px]">
            <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="currentColor" className="text-primary" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-20 opacity-10">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[300px] md:h-[300px]">
            <circle cx="50" cy="50" r="50" fill="currentColor" className="text-amber-500" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper
          variants={fadeIn(0.2, "up")}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-4">
            Our Commitment to Excellence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-neutral-800">
            Why Choose <span className="text-primary">Nextgen</span>?
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            We're committed to your success with a comprehensive approach to technical education
            that ensures your career advancement.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              onMouseEnter={() => setHoveredReason(reason.id)}
              onMouseLeave={() => setHoveredReason(null)}
              whileHover={{ y: isMobile ? 0 : -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-white border border-neutral-200/50 shadow-lg overflow-hidden h-full">
                {reason.image && (
                  <div className="w-full h-36 md:h-40 overflow-hidden">
                    <img 
                      src={reason.image} 
                      alt={reason.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                )}
                <CardContent className="p-5 md:p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <motion.div 
                      className={`w-16 h-16 md:w-20 md:h-20 ${reason.bgColor} rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 mb-4`}
                      animate={hoveredReason === reason.id ? { rotate: [0, 10, -10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <reason.Icon className={`h-8 w-8 md:h-10 md:w-10 ${reason.iconColor}`} />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-neutral-800">{reason.title}</h3>
                      <p className="text-sm md:text-base text-neutral-600">{reason.description}</p>
                    </div>
                  </div>
                  
                  {/* Animated underline on hover */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-primary to-primary/40 mt-4 md:mt-6"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredReason === reason.id ? "100%" : "30%" }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <ScrollAnimationWrapper
          variants={scaleIn(0.6)}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="bg-primary/5 rounded-lg md:rounded-2xl p-6 md:p-8 border border-primary/10 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Join Thousands of Successful Professionals</h3>
            <p className="text-sm md:text-base text-neutral-700">
              Our proven track record of placing students in top companies speaks for itself. 
              With Nextgen, you're not just getting education - you're investing in your future.
            </p>
            
            <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="bg-white py-1.5 md:py-2 px-3 md:px-4 rounded-full shadow-sm text-xs md:text-sm font-medium text-neutral-700">
                98% Placement Rate
              </div>
              <div className="bg-white py-1.5 md:py-2 px-3 md:px-4 rounded-full shadow-sm text-xs md:text-sm font-medium text-neutral-700">
                5000+ Trained Professionals
              </div>
              <div className="bg-white py-1.5 md:py-2 px-3 md:px-4 rounded-full shadow-sm text-xs md:text-sm font-medium text-neutral-700">
                150+ Industry Partners
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;