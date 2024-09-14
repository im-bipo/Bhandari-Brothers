import React from "react";

const TaxiServices = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-10 bg-white  rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-exa font-bold text-primary mb-4">
          Taxi Service
        </h1>
        <p className="text-xl text-gray-600">
          Experience Safe, Efficient, and Comfortable Travel
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 mb-4">
            At Bhandari Brothers Group, we understand that your transportation needs extend beyond traditional recruitment services. That&apos;s why we offer a reliable and convenient taxi service to cater to your travel requirements. Our fleet of well-maintained vehicles and experienced drivers ensure a smooth and enjoyable journey.
          </p>

          <h2 className="text-2xl font-semibold text-primary mb-3">
            Why Choose Our Taxi Service
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><span className="font-medium">Safety First:</span> Our drivers are trained to prioritize safety and adhere to all traffic regulations.</li>
            <li><span className="font-medium">Comfort and Convenience:</span> Our vehicles are clean, comfortable, and equipped with modern amenities.</li>
            <li><span className="font-medium">Punctuality:</span> We value your time and strive to arrive promptly for all bookings.</li>
            <li><span className="font-medium">Competitive Rates:</span> Our taxi services offer competitive pricing without compromising on quality.</li>
            <li><span className="font-medium">24/7 Availability:</span> We are available to serve your transportation needs around the clock.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Our Taxi Services Include
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><span className="font-medium">Airport Transfers:</span> Seamlessly connect to and from the airport with our reliable airport transfer services.</li>
            <li><span className="font-medium">City Tours:</span> Explore vibrant cities and attractions with our guided city tours.</li>
            <li><span className="font-medium">Corporate Transportation:</span> Ensure your employees reach meetings and events on time with our corporate transportation solutions.</li>
            <li><span className="font-medium">Point-to-Point Transfers:</span> Travel conveniently from your starting point to your destination.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Book Your Ride Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience the convenience and reliability of our taxi service. Simply contact us to book your ride or request a quote. Our team is ready to assist you with your transportation needs.
          </p>
          <p className="text-lg font-medium text-primary">
            Trust Bhandari Brothers Group for your taxi service needs and enjoy a hassle-free travel experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxiServices;
