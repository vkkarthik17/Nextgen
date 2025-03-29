import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import CallToActionSection from "@/components/home/CallToActionSection";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, StaggeredAnimation } from "@/hooks/use-scroll-animation";
import { fadeIn, slideIn, scaleIn } from "@/lib/animation";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Search, 
  BarChart, 
  Cpu, 
  Laptop, 
  GraduationCap, 
  ArrowRight, 
  ArrowUpRight,
  LineChart,
  Building2,
  Trophy,
  Users
} from "lucide-react";
import { useEffect } from "react";

const ConsultingPage = () => {
  const isMobile = useIsMobile();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);

    // Parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector('.hero-section') as HTMLElement | null;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      const processBg = document.querySelector('.process-bg') as HTMLElement | null;
      
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
      
      if (processBg) {
        const processBgOffset = processBg.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (processBgOffset < windowHeight && processBgOffset > -500) {
          const translateX = (windowHeight - processBgOffset) * 0.05;
          processBg.style.backgroundPositionX = `${translateX}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const consultingServices = [
    {
      id: "technical-assessment",
      title: "Technical Assessment & Audit",
      description: "Comprehensive evaluation of your technical infrastructure, processes, and workflows to identify improvement opportunities.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-blue-600/20",
      textColor: "text-blue-600"
    },
    {
      id: "process-optimization",
      title: "Process Optimization",
      description: "Streamline your operations and enhance productivity through expert analysis and implementation of best practices.",
      icon: BarChart,
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-primary/20",
      textColor: "text-primary"
    },
    {
      id: "technology-implementation",
      title: "Technology Implementation",
      description: "Expert guidance on selecting and implementing the right technologies for your business needs.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-teal-600/20",
      textColor: "text-teal-600"
    },
    {
      id: "training-development",
      title: "Training & Development Programs",
      description: "Customized training solutions for your team to enhance skills and adapt to new technologies.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-amber-600/20",
      textColor: "text-amber-600"
    },
  ];

  const caseStudies = [
    {
      id: "case1",
      title: "Process Optimization for Manufacturing Plant",
      industry: "Manufacturing",
      challenge: "Inefficient workflow causing production delays",
      solution: "Implemented advanced process automation and staff training",
      result: "40% reduction in production time and 25% cost savings",
      image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: Building2,
    },
    {
      id: "case2",
      title: "Digital Transformation for Oil & Gas Company",
      industry: "Oil & Gas",
      challenge: "Legacy systems creating data silos and inefficiency",
      solution: "Integrated systems and implemented cloud-based solutions",
      result: "Improved operational efficiency by 35% and enhanced data accessibility",
      image: "https://images.unsplash.com/photo-1579847188804-2a9c3aaf865a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: Laptop,
    },
    {
      id: "case3",
      title: "Technical Training Program for Engineering Team",
      industry: "Engineering Services",
      challenge: "Skill gaps in team affecting project delivery",
      solution: "Custom training program aligned with industry standards",
      result: "Increased project completion rate by 45% and improved client satisfaction",
      image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: GraduationCap,
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Assessment",
      description: "Thorough analysis of your current situation and requirements",
      icon: Search,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: 2,
      title: "Strategy",
      description: "Development of a customized solution tailored to your needs",
      icon: LineChart,
      color: "from-primary to-amber-500",
    },
    {
      number: 3,
      title: "Implementation",
      description: "Expert execution of the proposed solutions",
      icon: Cpu,
      color: "from-teal-500 to-teal-600",
    },
    {
      number: 4,
      title: "Evaluation",
      description: "Measuring outcomes and refining for continuous improvement",
      icon: BarChart,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-section relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)`,
            filter: 'brightness(0.3)',
          }}>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-primary/80 to-blue-900/90 opacity-80 mix-blend-multiply z-10"></div>
        
        {/* Floating geometric shapes for visual interest */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* Large shape */}
          <div className="parallax-element absolute -top-20 -right-20 opacity-30" data-speed="0.03">
            <svg width="500" height="500" viewBox="0 0 100 100" className="text-amber-400">
              <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="currentColor" />
            </svg>
          </div>
          
          {/* Medium shape */}
          <div className="parallax-element absolute bottom-10 left-10 opacity-20" data-speed="0.05">
            <svg width="300" height="300" viewBox="0 0 100 100" className="text-cyan-400">
              <circle cx="50" cy="50" r="50" fill="currentColor" />
            </svg>
          </div>
          
          {/* Small decorative elements */}
          <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-amber-400/20 blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 z-20 py-16 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper variants={fadeIn(0.2, "right")}>
              <div className="lg:pr-10">
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4">
                  Industry Leading Expertise
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Expert Consulting <span className="text-cyan-400">Services</span>
                </h1>
                <div className="w-20 h-1 bg-amber-400 mb-6"></div>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
                  Leverage our industry expertise to solve your technical challenges and optimize operations for maximum efficiency and performance
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button size="lg" className="bg-amber-400 text-gray-900 hover:bg-amber-300 font-medium px-8 py-6 text-lg shadow-lg" asChild>
                    <Link href="/contact">
                      Request a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper variants={fadeIn(0.3, "left")} className="hidden lg:block">
              <div className="relative">
                {/* Decorative backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl"></div>
                
                {/* Card grid - main feature */}
                <div className="parallax-element relative" data-speed="0.07">
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Stats cards */}
                      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center transform transition-transform hover:-translate-y-1">
                        <div className="bg-primary/10 p-3 rounded-lg mr-4">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">250+</p>
                          <p className="text-gray-600">Clients Served</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center transform transition-transform hover:-translate-y-1">
                        <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                          <Trophy className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">98%</p>
                          <p className="text-gray-600">Client Satisfaction</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center transform transition-transform hover:-translate-y-1">
                        <div className="bg-teal-500/10 p-3 rounded-lg mr-4">
                          <BarChart className="h-6 w-6 text-teal-500" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">35%</p>
                          <p className="text-gray-600">Efficiency Gain</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-lg p-6 flex items-center transform transition-transform hover:-translate-y-1">
                        <div className="bg-white/20 p-3 rounded-lg mr-4">
                          <Cpu className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">24/7</p>
                          <p className="text-white/90">Technical Support</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-cyan-400 text-gray-900 font-medium text-sm px-4 py-2 rounded-full shadow-lg">
                      Trusted by Industry Leaders
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 mt-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help</h2>
            <p className="text-lg text-gray-600">
              Our team of industry experts provides strategic consulting services 
              to help your organization overcome challenges and achieve operational excellence.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {consultingServices.map((service, index) => (
              <ScrollAnimationWrapper 
                key={service.id} 
                variants={fadeIn(0.2 + index * 0.05, "up")}
                threshold={0.1}
                className="h-full"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full group shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute top-4 left-4 ${service.color} p-3 rounded-lg z-20 shadow-md`}>
                        <service.icon className={`h-6 w-6 ${service.textColor}`} />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                          <p className="text-xs text-gray-700 font-medium">Industry-approved methodology</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 relative">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <Button variant="outline" size="sm" className="group" asChild>
                        <Link href={`/contact?service=${service.id}`}>
                          Learn More
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">
              See how we've helped organizations overcome challenges and achieve meaningful results
            </p>
          </ScrollAnimationWrapper>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <ScrollAnimationWrapper 
                key={study.id} 
                variants={slideIn(index % 2 === 0 ? "right" : "left", 0.3)}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                      <div className="w-full h-60 md:h-full">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20">
                        <study.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute bottom-4 left-4 z-20">
                        <p className="inline-flex items-center px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8">
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      
                      <div className="grid grid-cols-1 gap-6 mt-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-gray-700 flex items-center">
                            <span className="mr-2 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">
                              <span>01</span>
                            </span>
                            Challenge
                          </h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-gray-700 flex items-center">
                            <span className="mr-2 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                              <span>02</span>
                            </span>
                            Solution
                          </h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-gray-700 flex items-center">
                            <span className="mr-2 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                              <span>03</span>
                            </span>
                            Results
                          </h4>
                          <p className="text-gray-600">{study.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white process-bg">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-lg text-gray-600">
              A systematic approach designed to deliver measurable results
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Process connector line (desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            
            {processSteps.map((step, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                variants={fadeIn(0.1 + (index * 0.05), "up")}
                threshold={0.1}
                className="h-full"
              >
                <div className="text-center relative h-full">
                  <motion.div 
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={scaleIn(0.2)} className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-9xl text-primary/20">"</div>
              <blockquote className="text-center relative z-10">
                <p className="text-2xl md:text-3xl font-light italic mb-8">
                  The consulting services provided by NextGen completely transformed our engineering workflow. 
                  Their team's expertise and methodical approach helped us achieve results that far exceeded our expectations.
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-primary/30">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold">Michael Richardson</p>
                    <p className="text-primary/80 text-sm">CTO, Global Engineering Solutions</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default ConsultingPage;
