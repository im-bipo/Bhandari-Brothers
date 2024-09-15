import React from "react";

const Educational = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Educational Services at Bhandari Brothers Group
        </h1>
        <p className="text-xl text-gray-600">
          Empower your career with our comprehensive educational services, designed to provide you with the tools and knowledge needed to succeed in today&apos;s competitive landscape.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Why Choose Our Educational Services?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><span className="font-medium">Expert Instructors:</span> Learn from professionals with real-world experience in your field of interest.</li>
            <li><span className="font-medium">Flexible Learning Options:</span> Whether online or in-person, our courses are designed to fit your schedule.</li>
            <li><span className="font-medium">Career-Focused Programs:</span> Our programs are tailored to enhance your professional growth and employability.</li>
            <li><span className="font-medium">Interactive Learning:</span> Engage with practical, hands-on training to develop real skills.</li>
            <li><span className="font-medium">Certification and Support:</span> Receive recognized certifications and ongoing support after course completion.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Our Educational Services Include:
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Professional Certification Programs: Obtain certifications in IT, management, and more.</li>
            <li>Workshops and Seminars: Gain knowledge through practical and interactive sessions.</li>
            <li>Online Learning Platforms: Access our courses from anywhere, at any time.</li>
            <li>Mentorship Programs: Benefit from expert guidance throughout your learning journey.</li>
            <li>Career Counseling: Personalized support to help you make informed career decisions.</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 mt-6">
          Let Bhandari Brothers Group help you achieve your educational and professional goals, unlocking new opportunities for your future.
        </p>
      </div>
    </div>
  );
};

export default Educational;
