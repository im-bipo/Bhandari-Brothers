import { getJobs } from "@/appwrite/jobs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

type JobLayoutTypes = {
  children: React.ReactNode;
  params: { jobId: string };
};

const JobLayout = ({ children, params }: Readonly<JobLayoutTypes>) => {
  return (
    <>
      <div className="bg-[#EDEDED]">
        <div className="container mx-auto py-8">
          <div className="grid lg:grid-cols-4 gap-4">
            {children}
            <AvailableJobs />
          </div>
        </div>
      </div>
    </>
  );
};
export default JobLayout;

const AvailableJobs = async () => {
  revalidatePath("/jobs");
  const jobs = await await getJobs();
  return (
    <section className="bg-background p-4 hidden lg:block rounded-md lg:min-h-[35rem] lg:h-[70vh]">
      <h3 className="text-xl font-medium border-b-2 border-slate-200 pb-4 mb-4 ">
        Available Jobs
      </h3>
      <ScrollArea className="h-[88%]">
        {jobs.map((job, index) => (
          <Link href={job.$id} key={index} className="flex py-2">
            <Image
              src="/bbLogo.png"
              height={100}
              width={100}
              alt="Componylogo"
              className="object-cover mr-2 w-14 h-14"
            />
            <div>
              <div className="font-medium">{job.jobTitle}</div>
              <p className="text-secondary">{job.companyName}</p>
            </div>
          </Link>
        ))}
      </ScrollArea>
    </section>
  );
};
