import React from "react";
import ServiceCard from "./components/ServiceCard";
import EmployeeTestimonials from "@/app/components/EmployeeTestimonials";
import CompanyTestimonials from "@/app/components/CompanyTestimonials";
import StartHire from "./components/StartHire";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import OurCertifications from "./components/OurCertifications";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellIcon, CheckIcon, SwitchCamera } from "lucide-react";

const App = () => {
  return (
    <>
      {/* <main className="container pt-10">
        <div className="grid grid-cols-2 gap-2">
      {[1,2].map(item =>(
        <div key={item} className="bg-red-500 text-lg">
          title
        </div>
      ))}
        </div>

      </main> */}
      <ServiceCard />
      {/* <StartHire /> */}
      <WhyChooseUs />
      <CompanyTestimonials />
      <OurCertifications />
      <OurServices />
      {/* <JobCollection /> */}
      <EmployeeTestimonials />
    </>
  );
};

export default App;
