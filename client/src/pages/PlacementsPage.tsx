import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CallToActionSection from "@/components/home/CallToActionSection";
import { 
  BriefcaseIcon, 
  BuildingIcon, 
  GraduationCapIcon, 
  CheckCircleIcon, 
  ClipboardCheckIcon,
  UsersIcon
} from "lucide-react";

const PlacementsPage = () => {
  const companies = [
    "Reliance Industries",
    "Larsen & Toubro",
    "Tata Consultancy Services",
    "Infosys",
    "Tech Mahindra",
    "Siemens",
    "Bharat Petroleum",
    "Hindustan Petroleum",
    "ONGC",
    "Adani Group",
    "Microsoft India",
    "IBM India",
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      role: "Process Engineer at Reliance Industries",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The piping design course at Nextgen was instrumental in my career growth. Within two months of completing the program, I secured a position at a leading petrochemical company.",
    },
    {
      name: "Priya Patel",
      role: "CAD Designer at L&T Engineering",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The Advanced CAD training at Nextgen gave me the competitive edge I needed. The placement assistance was exceptional - I had three job offers before even completing the course!",
    },
    {
      name: "Arjun Mehta",
      role: "Automation Specialist at Siemens",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Transitioning from mechanical to automation engineering seemed daunting until I joined Nextgen. I'm now leading projects at a global automation company.",
    },
  ];

  const placementProcess = [
    {
      title: "Career Counseling",
      description: "One-on-one sessions to identify your strengths and career goals",
      icon: <ClipboardCheckIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Resume Building",
      description: "Professional guidance on creating an industry-standard resume",
      icon: <GraduationCapIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and feedback sessions with industry experts",
      icon: <UsersIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Company Matching",
      description: "Matching your profile with suitable companies in our network",
      icon: <BuildingIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Interview Scheduling",
      description: "Arranging interviews with potential employers",
      icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: "Offer Negotiation",
      description: "Support during the offer negotiation process",
      icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div>
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Placement and Careers</h1>
            <p className="text-lg mb-8">
              Our comprehensive placement program ensures a smooth transition from training to employment
            </p>
            <Button size="lg" asChild>
              <Link href="/#courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Placement Guarantee</h2>
            <p className="text-lg text-gray-600">
              We are committed to your career success with our industry partnerships and comprehensive placement support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">90%+</div>
                <p className="text-gray-600">Placement Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Hiring Partners</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">₹6 LPA</div>
                <p className="text-gray-600">Average Starting Salary</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Placement Process</h2>
            <p className="text-lg text-gray-600">
              A structured approach to help you secure your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {step.icon}
                    <span className="ml-3 font-bold">{step.title}</span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Hiring Partners</h2>
            <p className="text-lg text-gray-600">
              Leading companies that regularly recruit from Nextgen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-4 text-center">
                  <BuildingIcon className="h-8 w-8 mx-auto mb-2 text-primary/80" />
                  <p className="font-medium">{company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our alumni who have successfully transitioned to rewarding careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                      <img 
                        src={story.photo} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-center">{story.name}</h3>
                    <p className="text-primary text-sm text-center">{story.role}</p>
                  </div>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default PlacementsPage;
