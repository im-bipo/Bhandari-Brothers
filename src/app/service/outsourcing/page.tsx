import React from "react";

const Outsourcing = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Outsourcing Services at Bhandari Brothers Group
        </h1>
        <p className="text-gray-600">
          Empower your business by letting us handle the non-core tasks while
          you focus on growth and innovation.
        </p>
      </div>
      <div className="space-y-8">
        <div className="rounded-lg">
          <h2 className="text-xl font-semibold  mb-3">
            Why Choose Our Outsourcing Services?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Expertise Across Industries:</span>{" "}
              Skilled professionals with extensive experience across various
              sectors.
            </li>
            <li>
              <span className="font-medium">Cost-Effective Solutions:</span>{" "}
              Flexible outsourcing options that reduce overhead costs.
            </li>
            <li>
              <span className="font-medium">Focus on Core Business:</span> We
              manage non-core activities, allowing you to concentrate on
              strategic goals.
            </li>
            <li>
              <span className="font-medium">Scalability and Flexibility:</span>{" "}
              Our solutions grow with your business.
            </li>
            <li>
              <span className="font-medium">
                Data Security and Confidentiality:
              </span>{" "}
              Robust security measures to protect your sensitive information.
            </li>
          </ul>
        </div>

        <div className="rounded-lg">
          <h2 className="text-xl font-semibold  mb-3">
            Our Outsourcing Services Include:
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              {" "}
              Administrative Support: Efficient handling of tasks like data
              entry and scheduling.
            </li>
            <li>
              {" "}
              Customer Service: Responsive customer support to enhance your
              brand.
            </li>
            <li> IT Support: Expertise to manage your IT infrastructure.</li>
            <li>
              {" "}
              Human Resources: Streamlined HR processes, including recruitment
              and payroll management.
            </li>
            <li>
              {" "}
              Finance and Accounting: Accurate financial management, including
              bookkeeping and reporting.
            </li>
          </ul>
        </div>

        <p className="text-lg text-primary mt-6">
          Let Bhandari Brothers Group manage the details, so you can focus on
          success.
        </p>
      </div>
    </div>
  );
};

export default Outsourcing;
