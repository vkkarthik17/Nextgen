import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  BookOpen, 
  Briefcase, 
  Users, 
  FileText, 
  Mail, 
  ExternalLink, 
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import nextgenLogo from "@/assets/nextgen-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    { 
      name: "Courses", 
      path: "/courses", 
      icon: <BookOpen className="h-4 w-4" />,
      dropdownItems: [
        { name: "Engineering Design", path: "/courses/engineering-design" },
        { name: "Process Simulation", path: "/courses/process-simulation" },
        { name: "CAD/CAM", path: "/courses/cad-cam" },
        { name: "View All Courses", path: "/courses", icon: <ExternalLink className="h-3 w-3 ml-1" /> }
      ]
    },
    { name: "Consulting", path: "/consulting", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Placements", path: "/placements", icon: <Users className="h-4 w-4" /> },
    { name: "Blog", path: "/blog", icon: <FileText className="h-4 w-4" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === path;
    return location.startsWith(path);
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300 w-full",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
        : "bg-white py-3"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={nextgenLogo} alt="Nextgen Logo" className="h-10 md:h-12" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <li 
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={link.path}>
                    <motion.div
                      className={cn(
                        "flex items-center px-3 py-2 rounded-lg font-medium transition-colors relative",
                        isActive(link.path) 
                          ? "text-primary bg-primary/5" 
                          : "text-neutral-700 hover:text-primary hover:bg-neutral-50"
                      )}
                      onClick={() => !link.dropdownItems && closeMenu()}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="flex items-center">
                        <span className="mr-1.5">{link.icon}</span>
                        {link.name}
                      </span>
                      {link.dropdownItems && (
                        <ChevronDown className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          hoveredIndex === index ? "rotate-180" : ""
                        )} />
                      )}
                      
                      {isActive(link.path) && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          layoutId="navbar-indicator"
                        />
                      )}
                    </motion.div>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.dropdownItems && (
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-lg border border-neutral-100 overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {link.dropdownItems.map((item) => (
                              <Link key={item.path} href={item.path}>
                                <motion.div 
                                  className="flex items-center px-4 py-2.5 hover:bg-neutral-50 text-neutral-700 hover:text-primary"
                                  whileHover={{ x: 5 }}
                                  onClick={closeMenu}
                                >
                                  {item.name}
                                  {item.icon && item.icon}
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="ml-8">
              <Button 
                size="sm" 
                className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-neutral-800" />
                  ) : (
                    <Menu className="h-6 w-6 text-neutral-800" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-neutral-100 mt-4"
            >
              <div className="py-4 flex flex-col">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <motion.div
                      className={cn(
                        "flex items-center py-3 px-4 font-medium transition-colors cursor-pointer border-l-2",
                        isActive(link.path) 
                          ? "text-primary border-primary bg-primary/5" 
                          : "text-neutral-600 border-transparent hover:text-primary hover:border-primary/30 hover:bg-neutral-50"
                      )}
                      onClick={closeMenu}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.name}
                    </motion.div>
                  </Link>
                ))}
                <div className="mt-5 px-4">
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Contact Us Now</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
