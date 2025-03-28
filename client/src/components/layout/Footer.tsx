import { Link } from "wouter";
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nextgen</h3>
            <p className="text-neutral-300 mb-4">
              World-Class Training in Advanced Engineering and Technology
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Courses
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/consulting">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Consulting Services
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/placements">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Placements
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Blog
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/3d-design">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    3D Design & Modeling
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/courses/piping-design">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Piping Design & Engineering
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/courses/process-simulation">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    Process Simulation
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/courses/sap-training">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    SAP Training
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/courses/dotnet-development">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    .NET Development
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <div className="text-neutral-300 hover:text-white transition duration-300 cursor-pointer">
                    All Courses
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="mt-1 mr-3 text-neutral-300 h-5 w-5" />
                <span className="text-neutral-300">
                  123 Tech Park, Innovation Street, Mumbai 400001, India
                </span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="mt-1 mr-3 text-neutral-300 h-5 w-5" />
                <span className="text-neutral-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="mt-1 mr-3 text-neutral-300 h-5 w-5" />
                <span className="text-neutral-300">info@nextgenlearnings.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-10 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Nextgen Learning Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
