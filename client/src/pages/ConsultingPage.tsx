import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import CallToActionSection from "@/components/home/CallToActionSection";

const ConsultingPage = () => {
  const consultingServices = [
    {
      id: "technical-assessment",
      title: "Technical Assessment & Audit",
      description: "Comprehensive evaluation of your technical infrastructure, processes, and workflows to identify improvement opportunities.",
      icon: "🔍",
    },
    {
      id: "process-optimization",
      title: "Process Optimization",
      description: "Streamline your operations and enhance productivity through expert analysis and implementation of best practices.",
      icon: "⚙️",
    },
    {
      id: "technology-implementation",
      title: "Technology Implementation",
      description: "Expert guidance on selecting and implementing the right technologies for your business needs.",
      icon: "💻",
    },
    {
      id: "training-development",
      title: "Training & Development Programs",
      description: "Customized training solutions for your team to enhance skills and adapt to new technologies.",
      icon: "🎓",
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
    },
    {
      id: "case2",
      title: "Digital Transformation for Oil & Gas Company",
      industry: "Oil & Gas",
      challenge: "Legacy systems creating data silos and inefficiency",
      solution: "Integrated systems and implemented cloud-based solutions",
      result: "Improved operational efficiency by 35% and enhanced data accessibility",
    },
    {
      id: "case3",
      title: "Technical Training Program for Engineering Team",
      industry: "Engineering Services",
      challenge: "Skill gaps in team affecting project delivery",
      solution: "Custom training program aligned with industry standards",
      result: "Increased project completion rate by 45% and improved client satisfaction",
    },
  ];

  return (
    <div>
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Consulting Services</h1>
            <p className="text-lg mb-8">
              Leverage expert guidance to solve your industry challenges and optimize your operations
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
            <p className="text-lg text-gray-600">
              Our team of industry experts provides strategic consulting services 
              to help your organization overcome challenges and achieve operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/contact?service=${service.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">
              See how we've helped organizations overcome challenges and achieve meaningful results
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-primary mb-4">Industry: {study.industry}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h4 className="font-bold mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Results</h4>
                      <p className="text-gray-600">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-lg text-gray-600">
              A systematic approach designed to deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">Thorough analysis of your current situation and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold mb-2">Strategy</h3>
              <p className="text-gray-600">Development of a customized solution tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">Expert execution of the proposed solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold mb-2">Evaluation</h3>
              <p className="text-gray-600">Measuring outcomes and refining for continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default ConsultingPage;
