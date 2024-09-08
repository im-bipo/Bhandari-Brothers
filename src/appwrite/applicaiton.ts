"use server";
import { ID, Query } from "appwrite";
import { RESUME_BUCKET_ID, storage } from "./config";

// Create a new job application
export const newApplication = async (data: FormData) => {
  const name = (data.get("name") as string) || "";
  const email = (data.get("email") as string) || "";
  const coverLetter = (data.get("coverLetter") as string) || "";
  const resume = data.get("resume") as File;

  try {
    // Upload resume
    const file = await storage.createFile(
      RESUME_BUCKET_ID,
      ID.unique(),
      resume
    );
    const resumeId = file.$id;
    const url =
      "https://script.google.com/macros/s/AKfycbxQibcz7Nzxyr07K_MvbcTC4EwH5H76ChseXfoqiDDll10l6k-Go0lROOsHUyC3EVps/exec";

    // FormData for submission
    const formData: Record<string, string> = {
      Name: name,
      Email: email,
      "Cover Letter": coverLetter,
      Resume: `https://cloud.appwrite.io/v1/storage/buckets/66db01400039fcd4f0ad/files/${resumeId}/view?project=66da99af00092e3720ed&project=66da99af00092e3720ed&mode=admin`,
      ResumeID: resumeId,
      e_gs_SheetName: "Job Applications",
    };

    // Submit the form data via fetch
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData), // Converts form data to query string format
    })
      .then((response) => response.status)
      .then((code) => {
        if (code === 200) {
          return;
        } else {
          throw new Error("Failed to submit application");
        }
      })
      .catch((error) => console.error("Error:", error));
  } catch (err) {
    console.error("Error uploading resume: ");
    throw new Error("Failed to upload resume");
  }
};
