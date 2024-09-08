import { ourFeatures } from "@/data/staticData";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white">
      <div className="container py-10">
        <div className="flex flex-col text-center items-center">
          <h2 className="font-semibold text-2xl pb-10">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ourFeatures.map((feature, index) => (
            <article
              key={index}
              className="shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-lg p-6 min-h-[15rem] gap-2 flex flex-col items-center"
            >
              <div className={`p-4 ${feature.color} rounded-full w-fit`}>
                <feature.icon className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="max-w-[30rem] line-clamp-3 text-center">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
