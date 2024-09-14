import React from "react";

import { Button } from "../ui/button";
import {
  Job,
  JobBody,
  JobTitle,
  JobSalaryRange,
  JobHiringCompany,
  JobTags,
  JobDescription,
} from "../ui/jobCard";
import Image from "next/image";
import Link from "next/link";
import { JobTypes } from "@/appwrite/jobs";

const JobCard = ({
  $id,
  jobTitle,
  companyLogoUrl,
  companyName,
  salaryRange,
  description,
}: JobTypes) => {
  return (
    <Job className="">
      <JobBody>
        <Image
          src={"/bbLogo.png"}
          height={200}
          width={200}
          alt="job title"
          className="h-20 w-20"
        />
        <JobTitle className="line-clamp-2 leading-7">{jobTitle}</JobTitle>
        <JobHiringCompany>{companyName}</JobHiringCompany>
        <JobDescription className="line-clamp-3">{description}</JobDescription>
        <JobSalaryRange>{salaryRange}</JobSalaryRange>
      </JobBody>
      <div className="flex items-center p-6 pt-0">
        <Link href={`/jobs/${$id}`}>
          <Button className="bg-primary px-8">Apply</Button>
        </Link>
      </div>
    </Job>
  );
};

export default JobCard;
