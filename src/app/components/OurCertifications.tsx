import { ourCertificates } from "@/data/staticData";
import Image from "next/image";
import React from "react";

const OurCertifications = () => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col text-center items-center">
          <h2 className="font-semibold text-2xl pb-10">Our Certification</h2>
        </div>
        <div className="flex flex-col text-center items-center bg-green-950">
          <div className="flex lg:gap-[10rem] px-8 bg-white">
            {ourCertificates.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                height={500}
                width={500}
                alt="test"
                className="scale-50 sm:scale-75 md:scale-100 w-full h-24 object-contain object-top rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCertifications;
