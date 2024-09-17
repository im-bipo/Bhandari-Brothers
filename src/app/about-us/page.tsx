/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import OurCertifications from "../components/OurCertifications";

const AboutUs = () => {
  return (
    <div className="container w-full">
      <div className="">
        {/* Section Container */}
        <div className="grid  bg-gray-50 grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="polygon-reverse">
            <img
              alt="Bhandari Brothers"
              src="/images/md/Prakash Bhandari.jpg"
              className="w-full rounded-md h-[30rem] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-500 to-transparent opacity-40 rounded-md"></div>
          </div>

          {/* Right Column - Content with Core Values */}
          <div className="flex flex-col justify-center space-y-6 px-5">
            <p className="text-primary font-semibold text-md">
              Welcome to <span className="font-bold">Bhandari Brothers</span>!
            </p>
            <h1 className="text-3xl font-bold text-gray-900">
              Creating Value with Integrity & Excellence
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since our founding in <span className="font-semibold">2019</span>,
              Bhandari Brothers has grown to become a trusted name in the
              market. Our team of professionals is focused on exceeding
              expectations and fostering continuous improvement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in collaboration and forward-thinking strategies. Our
              solutions are tailored to meet the unique needs of our clients,
              while maintaining the highest standards of quality.
            </p>
          </div>
        </div>
      </div>

      {/* Our certificatino  */}
      <OurCertifications />
      <div>
        <div className="grid place-items-center grid-cols-3">
          <Image
            alt="DIER Certificate"
            width={1000}
            height={1500}
            src="/images/md/DIER_Certificate_1.jpg"
            className="w-64 p-4"
          />
          <Image
            alt="DIER Certificate"
            width={1000}
            height={1500}
            src="/images/md/DIER_Certificate_2.jpg"
            className="w-64 p-4"
          />
          <Image
            alt="iso cerrtificaition"
            width={1000}
            height={1500}
            src="/images/md/ISO_Certificate.png"
            className="w-64 p-4 object-contain"
          />
        </div>
      </div>

      {/* Sections */}

      <div className="grid md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Integrity: We uphold the highest ethical standards in everything
              we do.
            </li>
            <li>Customer Satisfaction: Our clients success is our success.</li>
            <li>
              Commitment to Quality: Excellence drives our passion for
              delivering the best results.
            </li>
            <li>
              Innovation: We constantly seek new and better ways to solve
              challenges.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Bhandari Brothers, we don&apos;t just provide services—we create
            partnerships. Our holistic approach ensures that our clients receive
            tailored solutions that fit their unique needs. From innovation to
            execution, we are with you every step of the way.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Over the years, Bhandari Brothers has achieved significant
            milestones in the industry. We have been recognized for our
            outstanding performance and dedication to excellence. Our
            achievements reflect our commitment to delivering top-notch services
            and building lasting relationships with our clients.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Meet the talented individuals behind Bhandari Brothers. Our team is
            composed of highly skilled professionals who are passionate about
            their work and dedicated to delivering exceptional results. We
            believe in collaboration and teamwork to achieve our goals and serve
            our clients better.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to drive innovation and deliver high-quality
            solutions that exceed our clients expectations. We aim to create
            long-lasting value and impact by fostering a culture of excellence
            and continuous improvement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our vision is to be the leading provider of innovative solutions in
            our industry. We strive to set new standards of excellence and be
            recognized as a trusted partner for our clients success.
          </p>
        </div>
      </div>

      {/* Our Tie-up */}
      <div className="bg-white p-6 rounded-lg border-t-2 mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Our Companies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center space-x-4 shadow-sm hover:bg-slate-50 duration-150 p-10">
            <Image
              height={300}
              width={300}
              src="/images/md/Europe staff ltd.png"
              alt="Europe Staff Limited Logo"
              className="w-full h-20 object-contain"
            />
            <div>
              <h3 className="text-gray-700 text-xl font-medium">
                Europe Staff Limited
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center space-x-4 shadow-sm hover:bg-slate-50 duration-150 p-10">
            <Image
              height={300}
              width={300}
              src="/images/md/BPR-Cleaning.png"
              alt="BPR Brose Ltd Logo"
              className="w-full h-20 object-contain"
            />
            <div>
              <h3 className="text-gray-700 text-xl font-medium">
                BPR Cleaning
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-lg text-gray-700">
          Have questions?{" "}
          <a
            href="/contact"
            className="text-primary font-medium hover:underline"
          >
            Contact Us
          </a>{" "}
          to learn more or get in touch with our team.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
