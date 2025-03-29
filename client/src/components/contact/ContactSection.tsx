import { useState } from "react";
import { Link } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "@/hooks/use-scroll-animation";
import { fadeIn, slideIn } from "@/lib/animation";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  MessageSquare
} from "lucide-react";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useIsMobile();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/4 top-0 opacity-20">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
            <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="currentColor" className="text-cyan-500" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper
          variants={fadeIn(0.2, "up")}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-neutral-800">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Have questions? Reach out to our team for more information about our programs, courses, and services.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <ScrollAnimationWrapper variants={fadeIn(0.3, "right")}>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-neutral-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4">
                  <MessageSquare className="text-white h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-800">Send us a Message</h3>
                  <p className="text-neutral-500">We'd love to hear from you</p>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              placeholder="John Doe" 
                              className="px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              placeholder="you@example.com" 
                              className="px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            placeholder="+91 98765 43210" 
                            className="px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Your Message
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            placeholder="I'm interested in learning more about..." 
                            className="px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm resize-none" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 md:py-3 px-6 rounded-xl shadow-md flex items-center justify-center"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? "Sending..." : "Send Message"} 
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper variants={fadeIn(0.4, "left")}>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-100">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                    <MapPin className="h-5 w-5" />
                  </span>
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Our Location</p>
                      <p className="text-neutral-600 text-sm md:text-base">
                        123 Tech Park, Innovation Street, Mumbai 400001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Phone Number</p>
                      <p className="text-neutral-600 text-sm md:text-base">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Email Address</p>
                      <p className="text-neutral-600 text-sm md:text-base">info@nextgenlearnings.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Office Hours</p>
                      <p className="text-neutral-600 text-sm md:text-base">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-100">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center hover:opacity-90 transition duration-300"
                    aria-label="Facebook"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="text-white h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-[#1DA1F2] rounded-lg flex items-center justify-center hover:opacity-90 transition duration-300"
                    aria-label="Twitter"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="text-white h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:opacity-90 transition duration-300"
                    aria-label="LinkedIn"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="text-white h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-[#405DE6] via-[#E1306C] to-[#FFDC80] rounded-lg flex items-center justify-center hover:opacity-90 transition duration-300"
                    aria-label="Instagram"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="text-white h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center hover:opacity-90 transition duration-300"
                    aria-label="YouTube"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Youtube className="text-white h-5 w-5" />
                  </motion.a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100">
                <h3 className="text-lg font-medium p-6 md:p-8 pb-3 md:pb-4 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                    <MapPin className="h-5 w-5" />
                  </span>
                  Training Center Location
                </h3>
                <div className="h-60 md:h-72 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709324!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1656592254469!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nextgen Training Center Location"
                    className="border-t border-neutral-100"
                  ></iframe>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
