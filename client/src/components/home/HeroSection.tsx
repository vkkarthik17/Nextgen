import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Transform Your Career with Nextgen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100">
              World-Class Training in Advanced Engineering and Technology
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6"
                asChild
              >
                <Link href="#courses">View Courses</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white hover:bg-neutral-100 text-primary font-medium py-3 px-6"
                asChild
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg shadow-2xl w-full h-auto overflow-hidden bg-gray-300 aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Engineering students working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
