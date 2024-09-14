import { JobCollection } from "../components/custom/JobCollection";
import SearchBar from "@/components/custom/SearchBar";
import React from "react";
import ServiceCard from "./components/ServiceCard";
import EmployeeTestimonials from "@/app/components/EmployeeTestimonials";
import CompanyTestimonials from "@/app/components/CompanyTestimonials";
import StartHire from "./components/StartHire";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import OurCertifications from "./components/OurCertifications";
const App = () => {
  return (
    <>
      <main className="container py-8 ">
        <div className="flex items-center justify-center flex-col gap-2 min-h-[20rem]">
          <h1 className="font-medium py-3">
            <span className="text-primary">Bhandari </span>
            <span className="text-secondary">Brothers</span>
          </h1>
          <h2 className="text-center text-xl px-5 md:text-2xl lg:text-[2rem] font-semibold md:max-w-[570px] lg:max-w-[800px]">
            Start Your Job Hunt Now and Enjoy Curated Job Matches.
          </h2>
          <SearchBar />
          <div className="line-clamp-1 mb-10 text-center px-2 md:max-w-[400px] lg:max-w-[600px]">
            Top Searches : Taxi Services, Graphic designing, Software Engineer,
            Delivery Service
          </div>
        </div>
      </main>
      <StartHire />
      <ServiceCard />
      <WhyChooseUs/>
      <CompanyTestimonials />
      <OurCertifications/>
      <OurServices/>
      {/* <JobCollection /> */}
      <EmployeeTestimonials />
    </>
  );
};

export default App;
