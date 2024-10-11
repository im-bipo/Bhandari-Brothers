/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { news } from "@/data/staticData";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div className="bg">
      {/* Headline Section */}
      <div className="grid container">
        <div className="py-10 px-5 pb-4">
          <div className="text-primary font-semibold ">Latest News</div>
          <h1 className="text-5xl font-bold my-5">
            Stay Updated with Our Latest Happenings
          </h1>
          <p className="text-gray-600">
            Keep up with the latest news and updates from our company. From
            exciting client meetings to prestigious memberships, we are always
            moving forward.
          </p>
        </div>
      </div>

      {/* News sections */}
      <div className="pb-20">
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                className="bg-white p-6 pb-0 rounded-lg relative"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover mb-4 h-[18rem] rounded-md"
                />
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed line-clamp-4">
                  {item.description}
                </p>
                <Link href={`news/${item.id}`}>
                  <Button className="my-2">Read More</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
