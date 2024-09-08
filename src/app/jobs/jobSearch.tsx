"use client";
import { JobTypes } from "@/appwrite/jobs";
import JobCard from "@/components/custom/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
type JobsSearchParamsType = {
  searchParams: string;
  jobsData: JobTypes[];
};
const JobSearch: React.FC<JobsSearchParamsType> = ({
  searchParams,
  jobsData,
}) => {
  const [searchQuery, setSearchQuery] = React.useState<string>(
    searchParams ?? ""
  );

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (searchQuery === "" && event.target.value === " ") return false;
    setSearchQuery(event.target.value);
  };

  // Filter jobs based on searchQuery
  const filteredJobs = jobsData.filter(
    (job) =>
      job.jobTitle &&
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex gap-2 md:w-1/2">
          <Input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="md:w-full"
          />
          <Button>Search</Button>
        </div>
        <div className="mt-4 md:mt-0 font-medium text-xl">
          {searchQuery.trim() !== "" &&
            `${filteredJobs.length} result${
              filteredJobs.length !== 1 ? "s" : ""
            } for '${searchQuery}'`}
        </div>
      </div>

      {searchQuery !== "" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
          <h4 className="font-medium text-xl my-5 border-t-2 pt-5">
            Other Recomendec Jobs
          </h4>
        </>
      )}
    </div>
  );
};

export default JobSearch;
