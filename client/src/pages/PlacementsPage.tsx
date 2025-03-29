import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CallToActionSection from "@/components/home/CallToActionSection";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, StaggeredAnimation } from "@/hooks/use-scroll-animation";
import { fadeIn, slideIn, scaleIn } from "@/lib/animation";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  BriefcaseIcon, 
  BuildingIcon, 
  GraduationCapIcon, 
  CheckCircleIcon, 
  ClipboardCheckIcon,
  UsersIcon,
  TrendingUpIcon,
  BoltIcon,
  ShieldCheckIcon,
  ArrowRight
} from "lucide-react";
import { useEffect } from "react";

const PlacementsPage = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Parallax effect for placements page
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector('.hero-placements') as HTMLElement | null;
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
  const companies = [
    "Reliance Industries",
    "Larsen & Toubro",
    "Tata Consultancy Services",
    "Infosys",
    "Tech Mahindra",
    "Siemens",
    "Bharat Petroleum",
    "Hindustan Petroleum",
    "ONGC",
    "Adani Group",
    "Microsoft India",
    "IBM India",
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      role: "Process Engineer at Reliance Industries",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The piping design course at Nextgen was instrumental in my career growth. Within two months of completing the program, I secured a position at a leading petrochemical company.",
    },
    {
      name: "Priya Patel",
      role: "CAD Designer at L&T Engineering",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The Advanced CAD training at Nextgen gave me the competitive edge I needed. The placement assistance was exceptional - I had three job offers before even completing the course!",
    },
    {
      name: "Arjun Mehta",
      role: "Automation Specialist at Siemens",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Transitioning from mechanical to automation engineering seemed daunting until I joined Nextgen. I'm now leading projects at a global automation company.",
    },
  ];

  const placementProcess = [
    {
      title: "Career Counseling",
      description: "One-on-one sessions to identify your strengths and career goals",
      icon: <ClipboardCheckIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Resume Building",
      description: "Professional guidance on creating an industry-standard resume",
      icon: <GraduationCapIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and feedback sessions with industry experts",
      icon: <UsersIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Company Matching",
      description: "Matching your profile with suitable companies in our network",
      icon: <BuildingIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Interview Scheduling",
      description: "Arranging interviews with potential employers",
      icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Offer Negotiation",
      description: "Support during the offer negotiation process",
      icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-placements relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)`,
            filter: 'brightness(0.4)',
          }}>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-blue-900/70 opacity-80 mix-blend-multiply z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="parallax-element absolute top-1/4 right-10 w-40 h-40 rounded-full bg-amber-400/20 blur-3xl" data-speed="0.04"></div>
          <div className="parallax-element absolute bottom-1/3 left-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl" data-speed="0.06"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollAnimationWrapper variants={fadeIn(0.2, "right")}>
              <div>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4">
                  Your Path to Success
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Placement and <span className="text-amber-400">Careers</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  Our comprehensive placement program ensures a smooth transition from training to employment with 
                  industry-leading companies across the technical sector.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button size="lg" className="bg-amber-400 text-gray-900 hover:bg-amber-300 font-medium px-8 py-6 text-lg shadow-lg" asChild>
                    <Link href="/#courses">
                      Explore Courses
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper variants={fadeIn(0.3, "left")} className="hidden lg:block">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl"></div>
                
                {/* Stats cards */}
                <div className="parallax-element relative" data-speed="0.07">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2 flex justify-center items-center">
                          <TrendingUpIcon className="h-5 w-5 mr-2" />
                          <span>90%+</span>
                        </div>
                        <p className="text-white/80 text-sm">Placement Rate</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2 flex justify-center items-center">
                          <BuildingIcon className="h-5 w-5 mr-2" />
                          <span>500+</span>
                        </div>
                        <p className="text-white/80 text-sm">Hiring Partners</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2 flex justify-center items-center">
                          <BoltIcon className="h-5 w-5 mr-2" />
                          <span>10k+</span>
                        </div>
                        <p className="text-white/80 text-sm">Placed Students</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2 flex justify-center items-center">
                          <ShieldCheckIcon className="h-5 w-5 mr-2" />
                          <span>₹6 LPA</span>
                        </div>
                        <p className="text-white/80 text-sm">Avg. Starting Salary</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Removed duplicate stats section since we have it in the hero */}

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Placement Process</h2>
            <p className="text-lg text-gray-600">
              A structured approach to help you secure your dream job
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((step, index) => (
              <ScrollAnimationWrapper 
                key={index}
                variants={fadeIn(0.1 + (index * 0.05), "up")}
                threshold={0.1}
                className="h-full"
              >
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full"
                >
                  <Card className="border border-neutral-200 shadow-md hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
                    <div className="bg-primary/5 py-3 px-4 border-b border-neutral-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          {step.icon}
                        </div>
                        <h3 className="font-bold text-lg text-neutral-800">{step.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-neutral-600">{step.description}</p>
                    </CardContent>
                    <div className="h-1.5 bg-primary/60 w-full opacity-80"></div>
                  </Card>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Partners</h2>
            <p className="text-lg text-gray-600">
              Leading companies that regularly recruit from Nextgen
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {companies.map((company, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                variants={fadeIn(0.1 + (index * 0.03), "up")}
                threshold={0.1}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="border border-gray-200/50 hover:border-primary/30 transition-colors duration-300 h-full">
                    <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                      <BuildingIcon className="h-8 w-8 mb-2 text-primary" />
                      <p className="font-medium">{company}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our alumni who have successfully transitioned to rewarding careers
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                variants={fadeIn(0.2 + (index * 0.1), "up")}
                threshold={0.1}
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="border border-neutral-200/70 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20 shadow-md">
                          <img 
                            src={story.photo} 
                            alt={story.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-xl text-center text-neutral-800">{story.name}</h3>
                        <p className="text-primary text-sm text-center bg-primary/5 px-3 py-1 rounded-full mt-1">{story.role}</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -top-2 -left-1 text-4xl text-primary/20">"</div>
                        <p className="text-neutral-600 italic pt-2 relative z-10">"{story.quote}"</p>
                        <div className="absolute -bottom-2 -right-1 text-4xl text-primary/20 rotate-180">"</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default PlacementsPage;
