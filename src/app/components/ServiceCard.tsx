import {
  InfoCard,
  InfoCardDescription,
  InfoCardHeader,
} from "@/components/ui/infoCard";
import React from "react";

const ServiceCard = () => {
  return (
    <section className="bg-[#F4F4F4] py-8">
      <div className="container">
        <div className="flex flex-col text-center items-center">
          <h2 className="font-semibold text-2xl pb-5">
            One Stop Hub for Jobs and Talent
          </h2>
          <p className="max-w-[50rem] line-clamp-2">
            Discover tailored job opportunities and connect with top talent
            effortlessly. Streamline your career search or hiring process with
            our comprehensive platform.
          </p>
        </div>
        <div className="grid place-items-center gap-5 grid-cols-1 lg:grid-cols-2 lg:gap-1  py-5">
          <InfoCard variant="secondary">
            <InfoCardHeader>
              Discover Thousands of Job Opportunities and Start Your Career
              Journey Today
            </InfoCardHeader>
            <InfoCardDescription>
              Find jobs tailored to your skills and preferences. Connect with
              top employers and take the next step in your career.
            </InfoCardDescription>
          </InfoCard>
          <InfoCard variant="primary">
            <InfoCardHeader>
              Connect with Top Talent and Build Your Dream Team with Ease and
              Efficiency
            </InfoCardHeader>
            <InfoCardDescription>
              Access a diverse pool of qualified candidates. Streamline your
              hiring process and find the perfect fit for your company.
            </InfoCardDescription>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
