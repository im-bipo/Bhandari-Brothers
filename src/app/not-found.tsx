'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cog, Home, Truck, Utensils, PackageSearch } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const NotFound = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-white shadow-lg">
        <div className="w-full max-w-lg text-center">
          <Image
            src="/bbLogo.png"
            alt="Bhandari Brothers Group"
            width={200}
            height={50}
            className="mx-auto mb-6 w-20"
          />
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            It looks like you&apos;re lost. Don&apos;t worry! You can go back to our homepage or explore some of our services below.
          </p>
          <Link href="/">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg inline-block mb-6"
            >
              <Home className="inline-block mr-2" />
              Go Back Home
            </motion.a>
          </Link>
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">Our Services:</h3>
            <ul className="space-y-2 text-gray-600">
              <Link href="/service/recruitment">
                <li className="text-lg text-gray-800 bg-gray-100 hover:bg-primary hover:text-white duration-200 cursor-pointer font-medium p-4 rounded-lg transition-all">
                  <Truck className="inline-block mr-2" /> Recruitment Services
                </li>
              </Link>
              <Link href="/service/outsourcing">
                <li className="text-lg text-gray-800 bg-gray-100 hover:bg-primary hover:text-white duration-200 cursor-pointer font-medium p-4 rounded-lg transition-all">
                  <PackageSearch className="inline-block mr-2" /> Outsourcing Services
                </li>
              </Link>
              <Link href="/service/taxi">
                <li className="text-lg text-gray-800 bg-gray-100 hover:bg-primary hover:text-white duration-200 cursor-pointer font-medium p-4 rounded-lg transition-all">
                  <Truck className="inline-block mr-2" /> Taxi Services
                </li>
              </Link>
              <Link href="/service/food-delivery">
                <li className="text-lg text-gray-800 bg-gray-100 hover:bg-primary hover:text-white duration-200 cursor-pointer font-medium p-4 rounded-lg transition-all">
                  <Utensils className="inline-block mr-2" /> Food Delivery Services
                </li>
              </Link>
              <Link href="/service/restaurant">
                <li className="text-lg text-gray-800 bg-gray-100 hover:bg-primary hover:text-white duration-200 cursor-pointer font-medium p-4 rounded-lg transition-all">
                  <Utensils className="inline-block mr-2" /> Restaurant Services
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column - Animations */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-12 bg-gradient-to-r from-gray-200 to-gray-100">
        <motion.div
          className="flex justify-center"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <Cog size={120} color="#ED1B26" />
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="text-gray-800 text-2xl mb-4">We’re always here to help!</h3>
          <p className="text-gray-700 text-lg max-w-md">
            Our services are designed to meet all your needs, from recruitment and outsourcing to taxi and food delivery services.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-primary text-white p-4 rounded-full shadow-lg"
          >
            <Truck size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-primary text-white p-4 rounded-full shadow-lg"
          >
            <Utensils size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-primary text-white p-4 rounded-full shadow-lg"
          >
            <Cog size={32} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
