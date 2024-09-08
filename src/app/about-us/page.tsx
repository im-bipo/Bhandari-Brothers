import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Intro and Mission */}
        <div>
          <div className="relative mb-8">
            <Image
              alt="Bhandari Brothers"
              src="/images/happyemployee/employee6.png"
              width={600}
              height={400}
              className="w-full rounded-md h-[30rem] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-20 rounded-md"></div>
          </div>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Welcome to <span className="font-semibold">Bhandari Brothers</span>!
            We are a leading company in our industry, committed to providing
            high-quality services and products. Our mission is to create value
            for our clients through innovation, integrity, and excellence. We
            are dedicated to helping our customers achieve their goals with
            unwavering support.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Since our founding in <span className="font-semibold">2004</span>,
            Bhandari Brothers has grown to become a trusted name in the market.
            Our team of dedicated professionals is focused on exceeding client
            expectations by fostering continuous improvement.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            At Bhandari Brothers, we believe in the power of collaboration and
            forward-thinking strategies. We remain committed to providing
            solutions that align with our clients unique needs, while
            maintaining the highest standards of quality.
          </p>
        </div>

        {/* Right Column - Core Values and Call to Action */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Integrity: We uphold the highest ethical standards in everything
                we do.
              </li>
              <li>
                Customer Satisfaction: Our clients success is our success.
              </li>
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
              partnerships. Our holistic approach ensures that our clients
              receive tailored solutions that fit their unique needs. From
              innovation to execution, we are with you every step of the way.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the years, Bhandari Brothers has achieved significant milestones in the industry. We have been recognized for our outstanding performance and dedication to excellence. Our achievements reflect our commitment to delivering top-notch services and building lasting relationships with our clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Meet the talented individuals behind Bhandari Brothers. Our team is composed of highly skilled professionals who are passionate about their work and dedicated to delivering exceptional results. We believe in collaboration and teamwork to achieve our goals and serve our clients better.
            </p>
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
      </div>
    </div>
  );
};

export default AboutUs;
