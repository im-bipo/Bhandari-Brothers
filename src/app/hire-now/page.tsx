"use client";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import { createJob, JobTypes } from "@/appwrite/jobs";

const AddJobForm = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<JobTypes>({
    defaultValues: {
      jobTitle: "",
      companyName: "",
      expireDate: "",
      location: "",
      workingHours: "",
      numberOfPosition: 1,
      description: "",
      requirements: "",
    },
  });

  const onSubmit: SubmitHandler<JobTypes> = async (data) => {
    try {
      await createJob(data);
      reset();
    } catch (error) {
      console.error("Failed to create job", error);
    }
  };

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image section for large screens */}
        <div className="hidden lg:block">
          <Image
            height={800}
            width={1200}
            src="https://res.cloudinary.com/dkhb36nqy/image/upload/v1728725584/we_are_hiring_jy6mpa.jpg"
            alt="Job"
            className="rounded-md"
          />
        </div>
        {/* Form section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">Add Your Job</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                {...register("jobTitle", { required: "Job Title is required" })}
              />
              {errors.jobTitle && (
                <p className="text-red-600 text-sm">{errors.jobTitle.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                {...register("companyName", { required: "Company Name is required" })}
              />
              {errors.companyName && (
                <p className="text-red-600 text-sm">{errors.companyName.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="expireDate">Expiration Date</Label>
              <Input
                type="date"
                id="expireDate"
                {...register("expireDate", { required: "Expiration Date is required" })}
              />
              {errors.expireDate && (
                <p className="text-red-600 text-sm">{errors.expireDate.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                {...register("location", { required: "Location is required" })}
              />
              {errors.location && (
                <p className="text-red-600 text-sm">{errors.location.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="workingHours">Working Hours</Label>
              <Input
                id="workingHours"
                placeholder="30 hours/week"
                {...register("workingHours", { required: "Working Hours are required" })}
              />
              {errors.workingHours && (
                <p className="text-red-600 text-sm">{errors.workingHours.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="numberOfPosition">Number of Positions</Label>
              <Input
                type="number"
                id="numberOfPosition"
                {...register("numberOfPosition", { required: "Number of Positions is required" })}
              />
              {errors.numberOfPosition && (
                <p className="text-red-600 text-sm">{errors.numberOfPosition.message}</p>
              )}
            </div>
            <div className="col-span-1 lg:col-span-2 grid gap-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                {...register("description", { required: "Job Description is required" })}
                placeholder="Describe the job in detail..."
              />
              {errors.description && (
                <p className="text-red-600 text-sm">{errors.description.message}</p>
              )}
            </div>
            <div className="col-span-1 lg:col-span-2 grid gap-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                {...register("requirements", { required: "Requirements are required" })}
                placeholder="Enter requirements separated by commas"
              />
              {errors.requirements && (
                <p className="text-red-600 text-sm">{errors.requirements.message}</p>
              )}
            </div>
            <div className="col-span-1 lg:col-span-2">
              <Button type="submit">
                {isSubmitting ? (
                  <LoaderIcon className="animate-spin" />
                ) : (
                  "Send Proposal"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobForm;
