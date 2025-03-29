import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import nextgenLogo from "@/assets/nextgen-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/#courses" },
    { name: "Consulting", path: "/consulting" },
    { name: "Placements", path: "/placements" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === path;
    return location.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img src={nextgenLogo} alt="Nextgen Logo" className="h-12" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`font-medium hover:text-[#f59e0b] transition-colors cursor-pointer ${
                    isActive(link.path) ? "text-[#f59e0b]" : "text-[#5f3811]"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </div>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#5f3811]" />
              ) : (
                <Menu className="h-6 w-6 text-[#5f3811]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden pb-4 px-2 ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`font-medium py-2 px-2 hover:text-[#f59e0b] transition-colors cursor-pointer ${
                    isActive(link.path) ? "text-[#f59e0b]" : "text-[#5f3811]"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
