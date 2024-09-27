import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Follow Us
            </h3>
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

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:info@bhandaribros.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@bhandaribros.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-300"
                >
                  +3567787789 +35627136935
                </a>
              </li>
              <li>
                <address className="not-italic">
                  Bhandari Brothers Group Headquarters, Level 2, Hall B DL
                  Business Center, Triq L-Irham C/W Triq Siimpson Marsa Malta
                </address>
              </li>
            </ul>
          </div>

          {/* Images Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Featured</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/">
                <Image
                  width={200}
                  height={200}
                  src="/images/md/Bhandari Brothers.jpg"
                  alt="Description 1"
                  className="object-cover bg-white w-20 h-20 rounded"
                />
              </Link>
              <Link href="https://www.globaltriforce.com">
                <Image
                  width={200}
                  height={200}
                  src="/images/md/triforce educational consultancy.jpg"
                  alt="Description 2"
                  className="object-cover bg-white w-20 h-20 rounded"
                />
              </Link>
              <Link href="https://www.globaltriforce.com">
                <Image
                  width={200}
                  height={200}
                  src="/images/md/g-globe.jpg"
                  alt="Description 3"
                  className="object-cover bg-white w-20 h-20 rounded"
                />
              </Link>
              <Link href="https://www.globaltriforce.com">
                <Image
                  width={200}
                  height={200}
                  src="/images/md/Triforce Tours and travels.jpg"
                  alt="Description 4"
                  className="object-cover bg-white w-20 h-20 rounded"
                />
              </Link>
              <Link href="https://www.globaltriforce.com">
                <Image
                  width={200}
                  height={200}
                  src="/images/md/TRI_Force Human Resources.png"
                  alt="Description 4"
                  className="object-cover bg-white w-20 h-20 rounded"
                />
              </Link>
              <Image
                width={200}
                height={200}
                src="/images/md/Europe staff ltd.png"
                alt="Description 4"
                className="object-contain bg-white w-20 h-20 rounded"
              />
              <Image
                width={200}
                height={200}
                src="/images/md/BPR-Cleaning.png"
                alt="Description 4"
                className="object-contain bg-white w-20 h-20 rounded"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Bhandari Brothers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
