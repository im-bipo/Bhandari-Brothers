"use server";
import { ID, Models } from "appwrite";
import { DATABASE_ID, databases, JOBS_COLLECTION_ID } from "./config";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

export type JobTypes = Models.Document & {
  jobTitle?: string;
  companyName?: string;
  expireDate?: string;
  location?: string;
  workingHours?: string;
  numberOfPosition?: number;
  description?: string;
  requirements?: string;
};

export const getJobs = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    JOBS_COLLECTION_ID
  );
  return response.documents;
};
export const getJobById = async (jobId: string) => {
  revalidatePath(`jobs/${jobId}`);
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      JOBS_COLLECTION_ID,
      jobId
    );
    return response;
  } catch (error) {}
  notFound();
};

export const createJob = async (data: JobTypes) => {
  const res = await databases.createDocument(
    DATABASE_ID,
    JOBS_COLLECTION_ID,
    ID.unique(),
    {
      jobTitle: data.jobTitle,
      companyName: data.companyName,
      expireDate: data.expireDate,
      location: data.location,
      workingHours: data.workingHours,
      numberOfPosition: Number(data.numberOfPosition),
      description: data.description,
      requirements: data.requirements,
    }
  );
  console.log(res);
};
