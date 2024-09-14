import React from 'react';

const RestaurantServices = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-exa font-bold text-primary mb-4">
          Bhandari Brothers Group: Your Culinary Staffing Solution
        </h1>
        <p className="text-xl text-gray-600">
          Crafting Culinary Excellence Together. Our specialized restaurant staffing services ensure your establishment thrives with top-tier talent.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Our Restaurant Staffing Services
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><span className="font-medium">Executive Chef Placement:</span> Recruit experienced chefs to lead your culinary team.</li>
            <li><span className="font-medium">Sous Chef and Line Cook Placement:</span> Skilled sous chefs and line cooks for efficient kitchen operations.</li>
            <li><span className="font-medium">Front-of-House Staff:</span> Find exceptional servers, bartenders, and hosts for outstanding customer service.</li>
            <li><span className="font-medium">Back-of-House Staff:</span> Reliable dishwashers and prep cooks to support your kitchen.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Why Choose Bhandari Brothers Group
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><span className="font-medium">Industry Expertise:</span> We understand the restaurant industry&apos;s specific staffing needs.</li>
            <li><span className="font-medium">Tailored Solutions:</span> We work closely to find the perfect candidates for your restaurant.</li>
            <li><span className="font-medium">Extensive Network:</span> Access to a vast network of culinary professionals.</li>
            <li><span className="font-medium">Quality Assurance:</span> We conduct thorough screening to ensure top-quality candidates.</li>
            <li><span className="font-medium">Efficient Placement:</span> We streamline the recruitment process for quick results.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Let Us Build Your Culinary Dream Team
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Partner with us and elevate your restaurant&apos;s culinary excellence with top-tier staffing solutions.
          </p>
          <p className="text-lg font-medium text-primary">
            Contact us today to start building your world-class culinary team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantServices;
