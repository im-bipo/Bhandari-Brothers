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
