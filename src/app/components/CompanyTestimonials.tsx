"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { happyClients } from "@/data/staticData";
const CompanyTestimonials = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col text-center items-center">
          <h2 className="font-semibold text-2xl pb-5">We have worked with</h2>
        </div>
        <div className="py-5">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[
              AutoScroll({ stopOnInteraction: false, direction: "forward" }),
            ]}
          >
            <CarouselContent>
              {happyClients.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="gap-4 basis-full md:basis-[40%] lg:basis-[20%] mx-5 bg-white rounded-md"
                  >
                    <Image
                      src={item.image}
                      height={500}
                      width={500}
                      alt="test"
                      className="w-full h-24 object-contain object-top rounded-sm"
                    />
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

export default CompanyTestimonials;
