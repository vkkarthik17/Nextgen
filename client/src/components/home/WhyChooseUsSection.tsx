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
import { ScrollAnimationWrapper, StaggeredAnimation } from "@/hooks/use-scroll-animation";
import { fadeIn, scaleIn } from "@/lib/animation";
import { useState } from "react";

const reasons = [
  {
    id: "placement",
    title: "Placement Guarantee & Assistance",
    description: "We ensure career opportunities through our extensive industry network and placement support.",
    Icon: PlacementIcon,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    id: "instructors",
    title: "Industry-Experienced Instructors",
    description: "Learn from professionals with years of hands-on experience in their respective fields.",
    Icon: InstructorsIcon,
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-600"
  },
  {
    id: "hands-on",
    title: "Hands-On Training",
    description: "Practical, project-based learning that prepares you for real-world challenges and applications.",
    Icon: HandsOnIcon,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600"
  },
  {
    id: "curriculum",
    title: "Comprehensive Curriculum",
    description: "Thoughtfully designed coursework that covers both fundamentals and advanced topics.",
    Icon: CurriculumIcon,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600"
  },
  {
    id: "support",
    title: "Ongoing Support",
    description: "Continuous guidance during and after training to ensure your professional success.",
    Icon: SupportIcon,
    bgColor: "bg-rose-500/10",
    iconColor: "text-rose-600"
  },
  {
    id: "certification",
    title: "Industry-Recognized Certification",
    description: "Receive certifications that enhance your resume and validate your expertise.",
    Icon: CertificationIcon,
    bgColor: "bg-teal-500/10",
    iconColor: "text-teal-600"
  },
];

const WhyChooseUsSection = () => {
  const [hoveredReason, setHoveredReason] = useState<string | null>(null);
  
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-20 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="currentColor" className="text-primary" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-20 opacity-10">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="currentColor" className="text-amber-500" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper
          variants={fadeIn(0.2, "up")}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-4">
            Our Commitment to Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-800">
            Why Choose <span className="text-primary">Nextgen</span>?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We're committed to your success with a comprehensive approach to technical education
            that ensures your career advancement.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaggeredAnimation staggerDuration={0.1}>
            {reasons.map((reason) => (
              <motion.div
                key={reason.id}
                onMouseEnter={() => setHoveredReason(reason.id)}
                onMouseLeave={() => setHoveredReason(null)}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="bg-white border border-neutral-200/50 shadow-lg overflow-hidden h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <motion.div 
                        className={`w-16 h-16 ${reason.bgColor} rounded-2xl flex items-center justify-center mr-5`}
                        animate={hoveredReason === reason.id ? { rotate: [0, 10, -10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <reason.Icon className={`h-8 w-8 ${reason.iconColor}`} />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-neutral-800">{reason.title}</h3>
                        <p className="text-neutral-600">{reason.description}</p>
                      </div>
                    </div>
                    
                    {/* Animated underline on hover */}
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-primary to-primary/40 mt-6"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredReason === reason.id ? "100%" : "30%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
        
        <ScrollAnimationWrapper
          variants={scaleIn(0.6)}
          className="mt-20 text-center"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Join Thousands of Successful Professionals</h3>
            <p className="text-neutral-700">
              Our proven track record of placing students in top companies speaks for itself. 
              With Nextgen, you're not just getting education - you're investing in your future.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-white py-2 px-4 rounded-full shadow-sm text-sm font-medium text-neutral-700">
                98% Placement Rate
              </div>
              <div className="bg-white py-2 px-4 rounded-full shadow-sm text-sm font-medium text-neutral-700">
                5000+ Trained Professionals
              </div>
              <div className="bg-white py-2 px-4 rounded-full shadow-sm text-sm font-medium text-neutral-700">
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
