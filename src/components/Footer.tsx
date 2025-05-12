import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
              Dr. Sarah Parker
            </h3>
            <p className="text-slate-600 mb-6 max-w-md">
              Dedicated to helping you find clarity, strength, and emotional balance
              through evidence-based psychological approaches.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-blue-600 mt-1 mr-3" />
                <span className="text-slate-600">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-blue-600 mt-1 mr-3" />
                <span className="text-slate-600">sarah.parker@example.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-600 mt-1 mr-3" />
                <span className="text-slate-600">
                  123 Wellness Street, Suite 101
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-blue-600 mt-1 mr-3" />
                <div className="text-slate-600">
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Dr. Sarah Parker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;