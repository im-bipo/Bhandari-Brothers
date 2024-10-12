/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { services } from "@/data/staticData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 rtl lg:grid-cols-2 gap-6 pt-14 container">
        {/* left  */}
        <div className="px-6 lg:px-12 mx-auto max-w-7xl">
          <h2 className="font-bold text-3xl md:text-4xl pb-6 text-gray-800">
            Our Services at Bhandari Brothers Group
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            At Bhandari Brothers Group, we pride ourselves on being a one-stop
            solution for diverse needs. Our services are designed to meet the
            demands of both individuals and businesses with the highest level of
            professionalism and efficiency.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <li className="text-lg text-gray-800 bg-gray-100 hover:bg-primary hover:text-white duration-200 cursor-pointer font-medium p-4 rounded-lg transition-all">
                  {service.header}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* right  */}
        <div className="relative sm:mx-12">
          <img
            src="https://res.cloudinary.com/dkhb36nqy/image/upload/v1728725581/Prakash_Bhandari_ce7udq.jpg"
            width={300}
            height={300}
            alt="Service Image"
            className="w-full object-bottom h-[30rem] object-cover rounded-md bg-gray-50 rounded-b-[0px] relative z-[2] shadow-lg"
          />
          <div
            id="controls"
            className=" flex items-center p-5 bg-gray-50 h-24 rounded-b-[25px] relative z-[2] shadow-lg"
          >
            <div className="pl-3">
              <h6 className="font-medium text-primary">Prakash Bhandari</h6>
              <p className="text-gray-400">CEO - Bhandari Brothers</p>
            </div>
          </div>
          <div className="w-[90%] shadow-lg rounded-b-3xl h-8 bg-gray-200 m-auto relative z-[1] bottom-3"></div>
          <div className="w-[70%] shadow-lg rounded-b-3xl h-5 bg-gray-200 m-auto relative z-0 bottom-3"></div>
          <div id="bookingP" className="flex justify-end">
            <div
              id="BoolingPCard"
              className="w-fit  px-6 rounded-lg bg-gray-50 shadow-lg relative z-10 bottom-64 h-28 text-center text-gray-600  right-3 lg:left-5"
            >
              <Image
                src="https://res.cloudinary.com/dkhb36nqy/image/upload/v1728726669/bbLogo_kqsjkn.png"
                width={200}
                height={200}
                alt="Bhandari Brothers"
                className="w-28"
              />
            </div>
          </div>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
};

export default OurServices;
const ServicesSection = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className={`${index % 2 !== 0 ? "bg-gray-100" : "bg-gray-50"} `}
          key={index}
        >
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 py-14 container ${
              index % 2 !== 0 && "lg:[direction:rtl]"
            }`}
          >
            {/* left */}
            <div className="px-6 lg:px-12 mx-auto max-w-7xl [direction:ltr]">
              <h2 className="font-bold text-2xl md:text-3xl pb-6 text-gray-800">
                {service.header}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                {service.description}
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={service.link}>
                <Button className="mt-5">Find Out More</Button>
              </Link>
            </div>

            {/* right */}
            <div className="relative mx-auto md:mx-0 lg:mr-10 text-right">
              <img
                src={service.imgSrc}
                width={300}
                height={300}
                alt={service.header}
                className="w-full object-top h-[25rem] object-cover rounded-t-3xl bg-gray-50 rounded-b-[25px] relative z-[2] shadow-lg"
              />
              <div className="w-[90%] shadow-lg rounded-b-3xl h-8 bg-gray-200 m-auto relative z-[1] bottom-3"></div>
              <div className="w-[70%] shadow-lg rounded-b-3xl h-5 bg-gray-200 m-auto relative z-0 bottom-3"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
