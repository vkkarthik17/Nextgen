import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { specializations } from "@/data/specializations";

const SpecializationsSection = () => {
  const getSpecializationIcon = (id: string) => {
    const specialization = specializations.find((spec) => spec.id === id);
    if (!specialization) return null;
    return specialization.Icon;
  };

  return (
    <section id="courses" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Our Specializations
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our comprehensive range of training programs designed for today's technical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((specialization) => (
            <Card 
              key={specialization.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/80 rounded-lg flex items-center justify-center mb-4">
                  {specialization.Icon && (
                    <div className="text-white">
                      <specialization.Icon className="h-6 w-6" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-800">
                  {specialization.title}
                </h3>
                <p className="text-neutral-600">
                  {specialization.description}
                </p>
                <Link href={`/courses/${specialization.id}`} className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
