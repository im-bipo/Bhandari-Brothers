import React from "react";

const Recruitment = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Your Trusted Recruitment Partner
        </h1>
        <p className="text-xl text-gray-600">
          Finding the right talent is crucial—let us help you build the perfect team.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Our Recruitment Services
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li> Executive Search: We specialize in sourcing top executives.</li>
            <li> Permanent Placement: Find permanent employees for all levels of your organization.</li>
            <li> Temporary Staffing: Short-term workers for immediate needs.</li>
            <li> Outplacement Services: Support laid-off employees in finding new jobs.</li>
            <li> RPO (Recruitment Process Outsourcing): Comprehensive management of your recruitment process.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Why Choose Bhandari Brothers Group?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li> Experienced Recruiters: Deep understanding of the Nepali job market.</li>
            <li> Extensive Network: A vast pool of qualified candidates across Nepal.</li>
            <li> Customized Solutions: Services tailored to meet your specific needs.</li>
            <li> Proven Results: A track record of successful placements.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            How It Works
          </h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li> Contact Us: Discuss your recruitment needs with us.</li>
            <li> Job Analysis: We’ll create a detailed job description together.</li>
            <li> Candidate Sourcing: We source candidates through our extensive network.</li>
            <li> Screening and Interviewing: We’ll find the best match for your role.</li>
            <li> Placement: We place the selected candidate in your company.</li>
          </ol>
        </div>

        <p className="text-lg text-gray-700 mt-6">
          We’re committed to helping you find the best talent. <strong>Contact us today</strong> to start your recruitment journey.
        </p>
      </div>
    </div>
  );
};

export default Recruitment;
