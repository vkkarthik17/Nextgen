import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step in Your Career?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of professionals who have accelerated their careers with Nextgen's 
            industry-focused training programs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8"
              asChild
            >
              <Link href="#courses">Enroll Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white hover:bg-neutral-100 text-primary font-medium py-3 px-8"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
