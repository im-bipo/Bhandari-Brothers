import { getJobs, JobTypes } from "@/appwrite/jobs";
import JobCard from "@/components/custom/JobCard";
import JobSearch from "./jobSearch";
import { revalidatePath } from "next/cache";
import SearchBar from "@/components/custom/SearchBar";

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
        <div className="text-center h-20">No Job Available</div>
      </div>
    );
  }
  return (
    <div className="container mx-auto pt-8">
       <main className="container border-b-2 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="font-medium py-3">
            <span className="text-primary">Bhandari </span>
            <span className="text-secondary">Brothers</span>
          </h1>
          <h2 className="lg: text-xl md:text-2xl lg:text-[2rem] font-semibold ">
            Start Your Job Hunt Now and Enjoy Curated Job Matches.
          </h2>
          <SearchBar />
          <div className="line-clamp-1 lg: mb-8 px-2 ">
            Top Searches : Taxi Services, Graphic designing, Software Engineer,
            Delivery Service
          </div>
        </div>
      </main>
      <JobSearch jobsData={jobsData as JobTypes[]} />
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
