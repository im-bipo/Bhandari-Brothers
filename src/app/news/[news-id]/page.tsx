import { news } from "@/data/staticData";
import Image from "next/image";
import React from "react";
type Types = {
  params: { "news-id": string };
};
const NewsDetail: React.FC<Types> = ({ params }) => {
  const slug = params["news-id"];
  const newsData = news.find((item) => item.id === slug);
  if (!newsData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary mb-5">404</h1>
          <h2 className="text-2xl font-semibold text-primary mb-3">
            News Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            We couldn&apos;t find the news article you were looking for. It
            might have been removed or you followed an incorrect link.
          </p>
          <a
            href="/news"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            Go Back to News
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-2 container">
      <div className="mb-10 py-10 px-5">
        <div className="text-primary font-semibold ">News</div>
        <h1 className="text-5xl font-bold my-5">
          {newsData.title}
        </h1>
        <p className="text-gray-600">
          {newsData.description}
        </p>
      </div>
      <div className="polygon">
        <Image
          height={1000}
          width={1500}
          src={newsData.image}
          alt="Bhandari Bros College + Business School"
          className="w-full h-[25rem] object-cover"
        />
      </div>
    </div>
  );
};

export default NewsDetail;
