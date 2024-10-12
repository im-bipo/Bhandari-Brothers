
import Image from "next/image";
import React from "react";
import { HireButton } from "../../app/components/HireButton";

const StartHire = () => {
  return (
    <section className="py-16">
      <div className="container max-w-[40rem] lg:max-w-[70rem]">
        <div className="bg-[#F5F5F5] overflow-hidden rounded-[10px] flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex items-center lg:mr-36">
            <Image
              src="https://res.cloudinary.com/dkhb36nqy/image/upload/v1728726669/hire_vpm3i4.png"
              alt="Start hire hero"
              width={500}
              height={500}
              className="w-40"
            />
            <div className="font-semibold">
              <div className="text-xl">Start</div>
              <div className="text-4xl uppercase">Hiring</div>
            </div>
          </div>
          <div className="ml-5  pr-3 lg:text-left">
            <h2 className="font-bold pt-4">Are you looking for exceptional talent to join your team?
            </h2>
            <div>Bhandari Brothers Group is here to help. We are a leading recruitment agency in Nepal with 
            a proven track record of connecting top talent with top companies.</div>
          </div>
          <HireButton/>
        </div>
      </div>
    </section>
  );
};

export default StartHire;
