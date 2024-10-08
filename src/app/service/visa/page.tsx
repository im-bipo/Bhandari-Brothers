import React from "react";

const Visa = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Visa Services by Bhandari Brothers Group
          </h1>
          <p className="text-gray-600">
            Embark on your international journey with ease through our
            comprehensive visa services. Whether you&apos;re seeking a work
            permit, a student visa, family reunification, or a business visa, we
            offer tailored solutions to meet your unique needs.
          </p>
        </div>

        <div className="text-slate-700 space-y-2">
          <h4 className="text-slate-800 font-medium">Our Services:</h4>
          <div>
            <span className="font-medium">Work Permit:</span> Secure your
            employment abroad with our streamlined work permit services,
            ensuring a hassle-free process from start to finish.
          </div>
          <div>
            <span className="font-medium">Student Visa: </span>Open the door to
            global education opportunities. We assist you in navigating the
            complexities of student visas for a smooth transition.
          </div>
          <div>
            <span className="font-medium">Family Reunification Visa: </span>
            Reunite with your loved ones seamlessly with our family
            reunification visa services, helping you bring your family together
            without any stress.
          </div>
          <div>
            <span className="font-medium">Business Visa: </span>Expand your
            business horizons internationally. We facilitate business visas to
            help you explore new markets and opportunities. Experience peace of
            mind as our dedicated team guides you through each step, providing
            personalized support to make your visa application process efficient
            and straightforward.
          </div>
        </div>
      </div>
    </>
  );
};

export default Visa;
