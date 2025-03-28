import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { specializations } from "@/data/specializations";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import CallToActionSection from "@/components/home/CallToActionSection";

const CoursePage = () => {
  const [, params] = useRoute("/courses/:id");
  const courseId = params?.id || "";
  const [course, setCourse] = useState(specializations.find((s) => s.id === courseId));

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundCourse = specializations.find((s) => s.id === courseId);
    setCourse(foundCourse);
  }, [courseId]);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/#courses">View All Courses</Link>
        </Button>
      </div>
    );
  }

  const courseModules = [
    {
      id: "module1",
      title: "Module 1: Introduction and Fundamentals",
      description: "Learn the foundational concepts and principles that serve as the building blocks for the rest of the course.",
    },
    {
      id: "module2",
      title: "Module 2: Core Technologies and Tools",
      description: "Explore the essential tools, software, and technologies used in professional settings.",
    },
    {
      id: "module3",
      title: "Module 3: Advanced Techniques",
      description: "Master sophisticated techniques and methodologies that set professionals apart in the industry.",
    },
    {
      id: "module4",
      title: "Module 4: Project Applications",
      description: "Apply your knowledge to real-world projects and scenarios under expert guidance.",
    },
    {
      id: "module5",
      title: "Module 5: Industry Best Practices",
      description: "Learn the standards, practices, and approaches used by leading organizations in the field.",
    },
  ];

  return (
    <div>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <Link href="/#courses" className="flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Courses
          </Link>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{course.fullDescription || course.description}</p>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">What You'll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Industry-standard tools and software
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Professional workflows and processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Problem-solving techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Documentation and best practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Collaboration with cross-functional teams
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Project management fundamentals
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-2xl font-bold mb-1">₹29,999</p>
                    <p className="text-sm text-gray-500">Including GST and materials</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-gray-600">3 months (12 weeks)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <div>
                        <p className="font-medium">Format</p>
                        <p className="text-sm text-gray-600">In-person and online options</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <div>
                        <p className="font-medium">Certification</p>
                        <p className="text-sm text-gray-600">Industry-recognized certificate</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full">Enroll Now</Button>
                    <Button variant="outline" className="w-full">Download Brochure</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="curriculum">
          <TabsList className="mb-8">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curriculum">
            <div>
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <Accordion type="single" collapsible className="mb-8">
                {courseModules.map((module) => (
                  <AccordionItem key={module.id} value={module.id}>
                    <AccordionTrigger className="text-left">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">{module.description}</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Key concept exploration and fundamentals</li>
                        <li>Practical exercises and skill-building activities</li>
                        <li>Case studies and real-world applications</li>
                        <li>Hands-on project work and assessments</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="instructors">
            <div>
              <h2 className="text-2xl font-bold mb-6">Meet Your Instructors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 mx-auto overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                        alt="Instructor" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-1">Rajesh Kumar</h3>
                    <p className="text-center text-gray-600 mb-4">Senior Technical Lead</p>
                    <p className="text-sm">
                      15+ years of industry experience with expertise in design and implementation
                      of complex systems across major industrial projects.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 mx-auto overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                        alt="Instructor" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-1">Priya Sharma</h3>
                    <p className="text-center text-gray-600 mb-4">Technical Specialist</p>
                    <p className="text-sm">
                      Project management professional with extensive experience in global
                      engineering projects and technical team leadership.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="faqs">
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="faq1">
                  <AccordionTrigger>What are the prerequisites for this course?</AccordionTrigger>
                  <AccordionContent>
                    Basic understanding of the field is recommended but not required. Our curriculum is designed to accommodate beginners while also challenging those with prior experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq2">
                  <AccordionTrigger>Is there a placement guarantee?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer placement assistance to all our students. Our extensive industry network and recruitment partners help ensure successful career transitions for our graduates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq3">
                  <AccordionTrigger>What is the class schedule like?</AccordionTrigger>
                  <AccordionContent>
                    Classes are typically held 3 days a week for 3 hours per session. We offer both weekday and weekend batches to accommodate working professionals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq4">
                  <AccordionTrigger>Are there any installment payment options?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer flexible payment plans that allow you to pay the course fee in installments. Please contact our admissions team for details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq5">
                  <AccordionTrigger>What kind of projects will I work on?</AccordionTrigger>
                  <AccordionContent>
                    You'll work on industry-relevant projects that simulate real-world challenges. These projects are designed to build your portfolio and demonstrate your capabilities to potential employers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <CallToActionSection />
    </div>
  );
};

export default CoursePage;
