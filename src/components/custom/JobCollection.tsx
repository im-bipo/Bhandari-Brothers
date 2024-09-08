import * as React from "react";
import { getJobs } from "@/appwrite/jobs";
import JobCard from "@/components/custom/JobCard";

export const JobCollection = async () => {
  const jobsData = await getJobs();
  const urgentJobs = jobsData.filter((job) => job.featured === true);
  return (
    <section className="bg-[#F4F4F4] py-8">
      <div className="container">
        <div className="flex flex-col text-center items-center">
          <h2 className="font-semibold text-2xl pb-5">Featured Hyring</h2>
          <p className="max-w-[50rem] line-clamp-2">
            Discover tailored job opportunities and connect with top talent
            effortlessly. Streamline your career search or hiring process with
            our comprehensive platform.
          </p>
        </div>
        <div id="job-container">
          <div className="py-2">
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {urgentJobs.map((job, index) => (
                  <JobCard key={index} {...job} />
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
