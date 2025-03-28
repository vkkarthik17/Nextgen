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
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Courses
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/consulting">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Consulting Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/placements">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Placements
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/3d-design">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    3D Design & Modeling
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/courses/piping-design">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Piping Design & Engineering
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/courses/process-simulation">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    Process Simulation
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/courses/sap-training">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    SAP Training
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/courses/dotnet-development">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    .NET Development
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <a className="text-neutral-300 hover:text-white transition duration-300">
                    All Courses
                  </a>
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
