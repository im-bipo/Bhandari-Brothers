import { Button } from "@/components/ui/button";
import {
  InfoCard,
  InfoCardDescription,
  InfoCardHeader,
} from "@/components/ui/infoCard";
import Link from "next/link";
import React from "react";
import EmployerApply from "./EmployerApply";

const ServiceCard = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col text-center items-center">
          <h1 className="font-semibold text-2xl pb-5">
            <span className="text-primary">Bhandari </span>
            <span className="text-secondary">Brothers</span>
          </h1>
          <p className="max-w-[50rem] line-clamp-2">
            Discover tailored job opportunities and connect with top talent
            effortlessly. Streamline your career search or hiring process with
            our comprehensive platform.
          </p>
        </div>
        <div className="grid place-items-center gap-5 grid-cols-1 lg:grid-cols-2 lg:gap-1  py-5">
          <InfoCard variant="secondary">
            <InfoCardHeader>
              Are you looking for <br /> a job?
            </InfoCardHeader>
            <InfoCardDescription>
              Find jobs tailored to your skills and preferences. Connect with
              top employers and take the next step in your career.
            </InfoCardDescription>
            <Link href="/jobs">
              <Button className="bg-white hover:bg-green-700 hover:text-white text-secondary">
                Apply Now
              </Button>
            </Link>
          </InfoCard>
          <InfoCard variant="primary">
            <InfoCardHeader className="pt-4">
              Are you an employer ?
            </InfoCardHeader>
            <InfoCardDescription>
              Access a diverse pool of qualified candidates. Streamline your
              hiring process and find the perfect fit for your company.
            </InfoCardDescription>
            <EmployerApply />
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
