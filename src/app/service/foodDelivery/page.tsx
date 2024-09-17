import React from "react";

const FoodDeliveryServices = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Food Delivery Services
        </h1>
        <p className="text-gray-600">
          Craving your favorite cuisine without the hassle? Our food delivery
          service offers the ultimate convenience and satisfaction.
        </p>
      </div>
      <div className="space-y-8">
        <div className="rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            Our Food Delivery Services
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Restaurant Partnerships:</span> We
              collaborate with a wide range of restaurants, offering you diverse
              cuisines.
            </li>
            <li>
              <span className="font-medium">Prompt Delivery:</span> Our
              efficient delivery network ensures your food arrives fresh and
              hot.
            </li>
            <li>
              <span className="font-medium">Easy Ordering:</span> Place your
              order online or through our mobile app with just a few taps.
            </li>
            <li>
              <span className="font-medium">Multiple Payment Options:</span>{" "}
              Enjoy flexibility with various payment methods, including cash on
              delivery.
            </li>
            <li>
              <span className="font-medium">Customer Satisfaction:</span> We
              prioritize your satisfaction and strive to provide exceptional
              service.
            </li>
          </ul>
        </div>

        <div className="rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose Bhandari Brothers Group for Food Delivery?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Quality Assurance:</span> We partner
              with trusted restaurants to guarantee the quality of our food.
            </li>
            <li>
              <span className="font-medium">Reliability:</span> Count on us for
              consistent and reliable delivery services.
            </li>
            <li>
              <span className="font-medium">Convenience:</span> Enjoy the ease
              of ordering from home or office.
            </li>
            <li>
              <span className="font-medium">Variety:</span> Explore a wide range
              of cuisines to suit your taste preferences.
            </li>
          </ul>
        </div>

        <div className="rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            Hungry? Place Your Order Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience the convenience and deliciousness of Bhandari Brothers
            Group&apos;s food delivery services.
          </p>
          <p className="text-lg font-medium text-primary">
            Order now and enjoy your meal delivered to your doorstep!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryServices;
