/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

const Projects = () => {
  return (
    <div className="bg">
      {/* Headline Section */}
      <div className="grid grid-cols-2 container">
        <div className="mb-10 py-10 px-5">
          <div className="text-primary font-semibold ">Our Projects</div>
          <h1 className="text-5xl font-bold my-5">
            Empowering Education & Hospitality
          </h1>
          <p className="text-gray-600">
            We are committed to helping students through education and providing
            world-class hospitality experiences.
          </p>
        </div>
        <div className="polygon">
          <img
            src="images/md/Empowering Education & Hospitality.png"
            alt="Bhandari Bros College + Business School"
            className="w-full h-[25rem] object-cover"
          />
        </div>
      </div>

      {/* project sections */}
      <div className="py-10 bg-slate-50">
        <section className="container">
          <div className="font-semibold text-2xl">Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 pb-0 rounded-lg relative">
              <img
                src="https://res.cloudinary.com/dkhb36nqy/image/upload/v1728725582/College_and_Business_School_hn6i5b.png"
                alt=" Bhandari Brothers College and Business School"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h2 className="text-2xl font-semibold mb-4">
                BB College and Business School
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed line-clamp-4">
                We offers a modern, industry-focused education, combining
                theoretical learning with practical experiences. We provide
                students with internships, real-world projects, and job
                placements, ensuring they are well-prepared for competitive
                careers. Our advanced facilities and expert faculty foster
                innovation and business leadership.
              </p>
              <Button className="my-2">Read More</Button>
              <div className="absolute top-10 px-2 py-1 rounded-full bg-secondary text-white right-10 w-fit">
                Upcomming
              </div>
            </div>

            <div className="bg-white p-6 pb-0 rounded-lg relative">
              <img
                src="https://res.cloudinary.com/dkhb36nqy/image/upload/v1728725580/INN_Hotel_dwhayj.jpg"
                alt="Bhandari Brothers INN Hotel"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h2 className="text-2xl font-semibold mb-4">BB INN Hotel</h2>
              <p className="text-lg text-gray-700 leading-relaxed line-clamp-4">
                We offers luxurious accommodations for business and leisure
                travelers. With modern amenities, elegant rooms, and
                personalized service, guests enjoy a relaxing and memorable
                stay. Conveniently located, our hotel provides a perfect blend
                of comfort and sophistication for a unique hospitality
                experience.
              </p>

              <Button className="my-2">Read More</Button>
              <div className="absolute top-10 px-2 py-1 rounded-full bg-secondary text-white right-10 w-fit">
                Upcomming
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
