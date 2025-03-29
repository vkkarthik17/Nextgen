import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { fadeIn, slideIn, float } from "@/lib/animation";
import { ScrollAnimationWrapper } from "@/hooks/use-scroll-animation";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement | null>(null);
  
  // GSAP animation for background elements and floating effect
  useEffect(() => {
    // Floating animation for the hero image (no ScrollTrigger needed)
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      // Animate particles
      if (particlesRef.current) {
        const particles = particlesRef.current.querySelectorAll('.particle') as NodeListOf<HTMLElement>;
        particles.forEach((particle: HTMLElement) => {
          gsap.to(particle, {
            y: gsap.utils.random(-100, 100),
            x: gsap.utils.random(-100, 100),
            opacity: gsap.utils.random(0.1, 0.4),
            duration: gsap.utils.random(10, 20),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      }
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] bg-[#111827] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Modern tech background with particles and gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#111827] to-[#0f172a] opacity-90"></div>
        
        {/* Glowing gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary/30 via-transparent to-transparent opacity-20"></div>
        
        {/* Animated particles */}
        <div ref={particlesRef} className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle absolute w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 0.8 + 0.2})`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'0.3\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(90vh-6rem)]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-8 mt-8 md:mt-0">
          <div className="lg:w-1/2 z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.2, "right")}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <div className="mb-2 text-white">Transform Your</div>
                <div className="bg-gradient-to-r from-primary via-primary to-yellow-500 text-transparent bg-clip-text inline-block">
                  Career with <span className="text-white border-b-4 border-primary pb-1">NextGen</span>
                </div>
              </h1>
            </motion.div>
            
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.4, "up")}
            >
              <div className="h-0.5 w-20 bg-primary mb-6"></div>
              <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-lg">
                World-Class Training in Advanced Engineering and Technology for Industry 4.0
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.6, "up")}
            >
              <Link href="/courses">
                <motion.button
                  className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View Courses</span>
                  <ChevronRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></div>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button 
                  className="relative group border-2 border-white/20 hover:border-white/40 text-white font-medium py-3 px-8 rounded-lg flex items-center bg-white/5 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Request Consultation</span>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
            
            <ScrollAnimationWrapper 
              className="flex items-center mt-12 text-white/80 max-w-sm"
              threshold={0.5}
              variants={slideIn("up", 0.8)}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 overflow-hidden shadow-lg">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm md:text-base font-medium">Join 5000+ professionals already learning with NextGen</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
          
          <div className="lg:w-1/2 z-10">
            <motion.div
              ref={imageRef}
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.5)}
              className="relative parallax-element"
              data-speed="0.05"
            >
              {/* Glowing card effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur-md opacity-50"></div>
              
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-transparent to-transparent z-10"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="NextGen Engineering Training" 
                  className="w-full h-full object-cover aspect-video"
                />
                
                {/* Modern floating stats cards */}
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/30 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">10+ Years Excellence</p>
                      <p className="text-xs text-white/70">Top-rated training institute</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/30 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">98% Placement Rate</p>
                      <p className="text-xs text-white/70">Industry-recognized training</p>
                    </div>
                  </div>
                </div>
                
                {/* Tech-looking badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-xl p-5 rounded-full border border-white/10 shadow-xl z-20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-xs">NEXTGEN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        variants={float}
        initial="hidden"
        animate="visible"
      >
        <div className="w-8 h-14 border border-white/20 rounded-full flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
        <span className="text-white/50 text-xs mt-2 font-medium tracking-wider">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
