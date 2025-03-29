import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { specializations } from "@/data/specializations";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, StaggeredAnimation } from "@/hooks/use-scroll-animation";
import { fadeIn, slideIn, scaleIn } from "@/lib/animation";
import { useState } from "react";

const SpecializationsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper
          variants={fadeIn(0.2, "up")}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-wider text-cyan-600 uppercase mb-2 inline-block">Expertise & Training</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-800 leading-tight">
            Our <span className="text-primary">Specializations</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our comprehensive range of training programs designed for today's technical professionals.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaggeredAnimation>
            {specializations.map((specialization) => (
              <motion.div
                key={specialization.id}
                onMouseEnter={() => setHoveredCard(specialization.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="h-full"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card 
                  className={`overflow-hidden h-full transition-all duration-300 border border-neutral-200/70 ${
                    hoveredCard === specialization.id 
                      ? 'shadow-xl border-primary/20' 
                      : 'shadow-md'
                  }`}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      hoveredCard === specialization.id 
                        ? 'bg-primary scale-110' 
                        : 'bg-primary/90'
                    }`}>
                      {specialization.Icon && (
                        <motion.div 
                          className="text-white"
                          animate={hoveredCard === specialization.id ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <specialization.Icon className="h-8 w-8" />
                        </motion.div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">
                      {specialization.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-6 flex-grow">
                      {specialization.description}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`/courses/${specialization.id}`} 
                        className={`group inline-flex items-center font-medium transition-colors ${
                          hoveredCard === specialization.id 
                            ? 'text-cyan-600' 
                            : 'text-primary'
                        }`}
                      >
                        <span className="mr-2">Learn more</span>
                        <motion.span
                          animate={hoveredCard === specialization.id ? { x: 5 } : { x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
        
        <ScrollAnimationWrapper
          variants={slideIn("up", 0.6)}
          className="mt-16 text-center"
        >
          <Link href="/courses">
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </Link>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default SpecializationsSection;
