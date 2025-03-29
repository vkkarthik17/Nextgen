import ContactSection from "@/components/contact/ContactSection";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "@/hooks/use-scroll-animation";
import { fadeIn } from "@/lib/animation";

const ContactPage = () => {
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-primary/5 pt-20 pb-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper variants={fadeIn(0.2, "up")} className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-800">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Whether you have questions about our courses, want to discuss career opportunities, 
              or need more information, our team is ready to assist you.
            </p>
          </ScrollAnimationWrapper>
          
          {/* Animated contact options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              {
                icon: "📱",
                title: "Call Us",
                info: "+91 98765 43210",
                desc: "Mon-Sat, 9am-6pm"
              },
              {
                icon: "📧",
                title: "Email Us",
                info: "info@nextgenlearnings.com",
                desc: "We'll respond promptly"
              },
              {
                icon: "📍",
                title: "Visit Us",
                info: "Mumbai, India",
                desc: "123 Tech Park, Mumbai"
              },
              {
                icon: "💬",
                title: "Live Chat",
                info: "Start a conversation",
                desc: "Available during work hours"
              }
            ].map((item, index) => (
              <ScrollAnimationWrapper 
                key={index}
                variants={fadeIn(0.2 + (index * 0.1), "up")}
                threshold={0.1}
              >
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100 text-center"
                  whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-neutral-800">{item.title}</h3>
                  <p className="text-primary font-medium">{item.info}</p>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
            <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,37.3C1120,53,1280,75,1360,85.3L1440,96L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
