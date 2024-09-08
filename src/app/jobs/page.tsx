import { getJobs, JobTypes } from "@/appwrite/jobs";
import JobCard from "@/components/custom/JobCard";
import JobSearch from "./jobSearch";
import { revalidatePath } from "next/cache";

type JobsParamsType = {
  searchParams: {
    q: string;
  };
};

const Jobs: React.FC<JobsParamsType> = async ({ searchParams }) => {
  const query = searchParams.q;

  revalidatePath("/jobs");
  const jobsData = (await getJobs());
  if (jobsData.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center  h-20">No Job Available</div>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-8">
      <JobSearch searchParams={query ?? ""} jobsData={jobsData as JobTypes[]} />
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobsData.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Jobs;
