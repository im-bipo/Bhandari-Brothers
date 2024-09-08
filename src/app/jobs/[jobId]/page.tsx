import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getJobById } from "@/appwrite/jobs";
import ApplyJob from "./applyJob";
import NotFound from "@/app/not-found";

type JobDetailsParams = {
  params: { jobId: string };
};
const JobDetails: React.FC<JobDetailsParams> = async ({ params }) => {
  const job = await getJobById(params.jobId);
  return (
    <>
      <ScrollArea className="bg-background p-4 col-span-3 rounded-md lg:min-h-[35rem] lg:h-[70vh]">
        <section className="pb-4 border-b-2 border-slate-200">
          <div className="flex">
            <Image
              src="/bbLogo.png"
              height={300}
              width={300}
              alt="Compony logo"
              className="object-cover w-20 h-20"
            />
            <div className="ml-5">
              <h2 className="text-primary text-xl font-semibold">
                {job.jobTitle}
              </h2>
              <h4 className="text-secondary">{job.companyName}</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 py-4">
            <div>
              <span className="font-semibold">Company: </span>
              {job.companyName}
            </div>
            <div>
              <span className="font-semibold">Salary: </span>
              {job.salaryRange}
            </div>
            <div>
              <span className="font-semibold">Location: </span>
              {job.location}
            </div>
            <div>
              <span className="font-semibold">Working Hour: </span>
              {job.workingHours}
            </div>
            <div>
              <span className="font-semibold">Expire Date: </span>
              {new Date(job.expireDate).toDateString()}
            </div>
          </div>
          <ApplyJob jobId={job.$id} />
        </section>
        <section className="py-4">
          <div className="font-semibold">Description</div>
          <p>{job.description}</p>
        </section>
        <section className="py-4">
          <div className="font-semibold">Requirement</div>
          <p>{job.requirements}</p>
        </section>
      </ScrollArea>
    </>
  );
};

export default JobDetails;
