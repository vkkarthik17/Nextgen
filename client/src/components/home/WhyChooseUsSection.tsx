import { Card, CardContent } from "@/components/ui/card";
import {
  PlacementIcon,
  InstructorsIcon,
  HandsOnIcon,
  CurriculumIcon,
  SupportIcon,
  CertificationIcon,
} from "@/components/ui/icons";

const reasons = [
  {
    id: "placement",
    title: "Placement Guarantee & Assistance",
    description: "We ensure career opportunities through our extensive industry network and placement support.",
    Icon: PlacementIcon,
  },
  {
    id: "instructors",
    title: "Industry-Experienced Instructors",
    description: "Learn from professionals with years of hands-on experience in their respective fields.",
    Icon: InstructorsIcon,
  },
  {
    id: "hands-on",
    title: "Hands-On Training",
    description: "Practical, project-based learning that prepares you for real-world challenges and applications.",
    Icon: HandsOnIcon,
  },
  {
    id: "curriculum",
    title: "Comprehensive Curriculum",
    description: "Thoughtfully designed coursework that covers both fundamentals and advanced topics.",
    Icon: CurriculumIcon,
  },
  {
    id: "support",
    title: "Ongoing Support",
    description: "Continuous guidance during and after training to ensure your professional success.",
    Icon: SupportIcon,
  },
  {
    id: "certification",
    title: "Industry-Recognized Certification",
    description: "Receive certifications that enhance your resume and validate your expertise.",
    Icon: CertificationIcon,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Why Choose Nextgen?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We're committed to your success with a comprehensive approach to technical education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <Card key={reason.id} className="bg-neutral-50 border-none">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <reason.Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-neutral-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
