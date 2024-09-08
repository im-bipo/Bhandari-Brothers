"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { happyEmployee } from "@/data/staticData";
const EmployeeTestimonials = () => {
  return (
    <section className="py-8 bg-slate-50">
      <div className="container">
        <div className="flex flex-col text-center items-center">
          <h2 className="font-semibold text-2xl pb-5">Our Happy Employee</h2>
          <p className="max-w-[50rem] line-clamp-2">
            Customer feedback is information provided by customers about their
            experience with a product or service.
          </p>
        </div>
        <div className="py-5">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[
              AutoScroll({ stopOnInteraction: false, direction: "backward" }),
            ]}
          >
            <CarouselContent>
              {happyEmployee.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="grid grid-cols-2 gap-4 basis-full md:basis-[40%]  mx-5 p-6 bg-white rounded-md"
                  >
                    <div>
                      <div className="">
                        <Image
                          src={item.image}
                          height={500}
                          width={500}
                          alt="test"
                          className="w-full h-52 object-cover object-top rounded-sm"
                        />
                        <div className="line-clamp-3 font-bold py-2 text-primary">
                          {item.name}
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center">
                        <div className="w-full"></div>
                      </div>
                      <div>
                        <div className="mb-2 font-bold text-xl">
                          Joined as a {item.position}
                        </div>
                        <div className="min-h-32 line-clamp-6">{item.msg}</div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonials;
