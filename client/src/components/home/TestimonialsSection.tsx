import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            What Our Students Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with Nextgen.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="transition-opacity duration-500"
              style={{ opacity: 1 }}
            >
              <Card className="bg-neutral-50 shadow-md max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full mr-4 overflow-hidden bg-neutral-200">
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-neutral-600">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 italic">"{testimonials[currentIndex].quote}"</p>
                  <div className="mt-4 text-amber-500 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'fill-current' : 'stroke-current fill-none'}`} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-neutral-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow-md"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow-md"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
