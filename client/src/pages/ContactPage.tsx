import ContactSection from "@/components/contact/ContactSection";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about our courses, want to discuss career opportunities, or need more information, we're here to help.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
