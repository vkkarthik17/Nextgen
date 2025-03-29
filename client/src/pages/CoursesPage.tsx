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
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-primary/90 to-gray-900 text-white">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxNSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
          </div>
          
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Explore Our Specialized Courses</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Transform your career with industry-relevant training programs designed to give you the competitive edge.
            </p>
            
            <div className="flex items-center max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
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