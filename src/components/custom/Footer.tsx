import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400">
              We are Bhandari Brothers, dedicated to connecting job seekers with their dream jobs and employers with the best talent.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:info@bhandaribrothers.com" className="hover:text-white transition-colors duration-300">
                  info@bhandaribrothers.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <address className="not-italic">
                  1234 Job Street, Kathmandu, Nepal
                </address>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Twitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Instagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bhandari Brothers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
