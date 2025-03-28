import { Card, CardContent } from "@/components/ui/card";
import { industries } from "@/data/industries";

const IndustriesSection = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Industries We Serve
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our training programs cater to professionals across multiple technical sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry) => (
            <Card 
              key={industry.id} 
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-primary">
                  <industry.Icon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-medium text-neutral-800">{industry.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
