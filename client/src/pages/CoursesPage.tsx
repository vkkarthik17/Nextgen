import { Link } from "wouter";
import { specializations } from "@/data/specializations";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, StaggeredAnimation } from "@/hooks/use-scroll-animation";
import { fadeIn, slideIn } from "@/lib/animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, Calendar, Award, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CoursesPage = () => {
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(specializations);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Parallax effect for courses page
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector('.hero-courses') as HTMLElement | null;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      if (heroSection) {
        const heroHeight = heroSection.clientHeight;
        const translateY = Math.min(scrollY * 0.3, heroHeight / 2);
        heroSection.style.backgroundPositionY = `-${translateY}px`;
      }

      parallaxElements.forEach((el: Element) => {
        const element = el as HTMLElement;
        const speed = element.dataset.speed || '0.1';
        const translateY = scrollY * parseFloat(speed);
        element.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredCourses(specializations);
    } else {
      const filtered = specializations.filter(
        course => 
          course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [query]);

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-courses relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)`,
            filter: 'brightness(0.4)',
          }}>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/80 z-10"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full bg-cyan-400/30 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-amber-400/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ScrollAnimationWrapper variants={fadeIn(0.2, "right")} className="md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Elevate Your <span className="text-amber-400">Technical Skills</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Transform your career with our industry-relevant training programs designed to give you the competitive edge in today's technical landscape.
              </p>
              
              <div className="flex items-center max-w-xl bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 shadow-lg">
                <Search className="text-white/70 ml-2 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-white px-3 py-2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper variants={fadeIn(0.3, "left")} className="hidden md:block">
              <div className="parallax-element relative" data-speed="0.05">
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {specializations.slice(0, 4).map((spec, index) => (
                      <motion.div 
                        key={spec.id}
                        className="bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                      >
                        <div className="flex gap-3 items-center mb-2">
                          {spec.Icon && <spec.Icon className="h-5 w-5 text-amber-400" />}
                          <h3 className="text-sm font-medium text-white truncate">{spec.title}</h3>
                        </div>
                        <div className="text-xs text-white/70">Top-rated course</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-amber-400 text-primary font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                    {specializations.length}+ Courses
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <StaggeredAnimation>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    onMouseEnter={() => setHoveredCard(course.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="h-full"
                    whileHover={{
                      y: isMobile ? 0 : -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="overflow-hidden h-full transition-all duration-300 border border-gray-200/70 shadow-md hover:shadow-xl">
                      {course.image && (
                        <div className="w-full h-48 overflow-hidden">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary`}>
                            {course.Icon && <course.Icon className="h-6 w-6" />}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-5">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-5">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>3 months</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="h-4 w-4 mr-1" />
                            <span>Beginner friendly</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Award className="h-4 w-4 mr-1" />
                            <span>Certificate</span>
                          </div>
                        </div>
                        
                        <Link href={`/courses/${course.id}`}>
                          <Button className="w-full group" variant="outline">
                            View Course Details
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 py-12 text-center">
                  <h3 className="text-xl font-medium mb-2">No courses found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
                  <Button variant="outline" onClick={() => setQuery("")}>Reset Search</Button>
                </div>
              )}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Get personalized guidance on selecting the right course for your career goals. Our education counselors are here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-lg">
                  Contact an Advisor
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg">
                Download Brochure
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;