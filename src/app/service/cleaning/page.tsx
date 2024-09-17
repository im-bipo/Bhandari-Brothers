import React from "react";

const Cleaning = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Cleaning Services at Bhandari Brothers Group
        </h1>
        <p className="text-gray-600">
          Offering a wide range of cleaning services across the EU, Bhandari
          Brothers Group ensures a spotless environment for every space. From
          domestic to commercial settings, our comprehensive cleaning solutions
          are tailored to meet all your needs.
        </p>
      </div>

      <div className="text-slate-700 space-y-2">
        <h4 className="text-slate-800 font-medium">Our Services:</h4>
        <div>
          <span className="font-medium">Domestic Cleaning:</span> Maintain a
          pristine home with our reliable domestic cleaning services. Commercial
          Cleaning: Keep your business premises sparkling clean and welcoming
          for staff and clients.
        </div>
        <div>
          <span className="font-medium">Deep Cleaning:</span> Thorough cleaning
          services for a hygienic and fresh environment.
        </div>
        <div>
          <span className="font-medium">Post-Construction Cleaning: </span>
          Efficient cleaning to make newly built spaces ready for use.
        </div>
        <div>
          <span className="font-medium">Private Apartment Cleaning: </span>
          Customized cleaning services for private residences, ensuring comfort
          and cleanliness.
        </div>
        <div>
          Trust Bhandari Brothers Group for professional cleaning solutions that
          leave every corner immaculate.
        </div>
      </div>
    </div>
  );
};

export default Cleaning;
