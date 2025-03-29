import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { fadeIn, slideIn, float } from "@/lib/animation";
import { ScrollAnimationWrapper } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  
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
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] bg-gradient-to-br from-[#5f3811] via-[#472a0d] to-[#2b190a] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg-element absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow-400/20 blur-xl"></div>
        <div className="hero-bg-element absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-500/20 blur-xl"></div>
        <div className="hero-bg-element absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-[#5f3811]/20 blur-xl"></div>
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'0.15\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(90vh-6rem)]">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          <div className="md:w-1/2 z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.2, "right")}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text">
                <span className="inline-block pb-2">Transform Your</span><br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">Career</span> with <span className="text-[#5f3811]">Nextgen</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-neutral-100 max-w-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.4, "up")}
            >
              World-Class Training in Advanced Engineering and Technology
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.6, "up")}
            >
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-[#5f3811] font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                asChild
              >
                <Link href="#courses">View Courses</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white hover:bg-yellow-50 text-[#5f3811] border-2 border-[#5f3811] font-medium py-4 px-8 rounded-xl shadow-lg transition-all duration-300"
                asChild
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </motion.div>
            
            <ScrollAnimationWrapper 
              className="flex items-center mt-16 text-white/80 max-w-sm"
              threshold={0.5}
              variants={slideIn("up", 0.8)}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Join 5000+ students already learning with Nextgen</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
          
          <div className="md:w-1/2 z-10">
            <motion.div
              ref={imageRef}
              initial="hidden"
              animate="visible"
              variants={fadeIn(0.5)}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-[#5f3811] rounded-2xl blur-md opacity-70"></div>
              <div className="rounded-2xl shadow-2xl w-full h-auto overflow-hidden bg-gray-300 aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Engineering students working together" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with statistics */}
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <p className="text-sm font-medium">5+ Years Excellence</p>
                  <p className="text-xs opacity-80">Top-rated training institute</p>
                </div>
                
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <p className="text-sm font-medium">98% Placement Rate</p>
                  <p className="text-xs opacity-80">Industry-recognized certifications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative scrolldown indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        variants={float}
        initial="hidden"
        animate="visible"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
        <span className="text-white/50 text-sm mt-2">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
