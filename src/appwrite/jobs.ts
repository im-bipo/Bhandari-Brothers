"use server";
import { Models } from "appwrite";
import { DATABASE_ID, databases, JOBS_COLLECTION_ID } from "./config";
import { notFound } from "next/navigation";
export type JobTypes = Models.Document & {
  applicationsCollection?: string[];
  companyName?: string;
  description?: string;
  expireDate?: string;
  jobTitle?: string;
  requirements?: string;
  urgency?: "normal" | "urgent";
  companyLogoUrl?: string;
  salaryRange?: string;
  location?: string;
  workingHours?: string;
  featured?: boolean;
};

export const getJobs = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    JOBS_COLLECTION_ID
  );
  return response.documents;
};
export const getJobById = async (jobId: string) => {
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      JOBS_COLLECTION_ID,
      jobId
    );
    return response;
  } catch (error) {}
  notFound()
};
