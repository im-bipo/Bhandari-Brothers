"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon } from "lucide-react";

const AddJobForm = () => {
  const [formSubmission, setFormSubmission] = useState(false);
  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    expireDate: "",
    urgency: "normal",
    numberOfPosition: 1,
    description: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmission(true);

    const job = {
      ...jobData,
      requirements: jobData.requirements.split(","),
    };

    try {
      //   await createJob(job);
      setFormSubmission(false);
      // Reset form after successful submission
      setJobData({
        jobTitle: "",
        companyName: "",
        expireDate: "",
        urgency: "normal",
        numberOfPosition: 1,
        description: "",
        requirements: "",
      });
    } catch (error) {
      console.error("Failed to create job", error);
      setFormSubmission(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Add Your Job</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="grid gap-2">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="expireDate">Expiration Date</Label>
          <Input
            type="date"
            id="expireDate"
            name="expireDate"
            value={jobData.expireDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="urgency">Urgency</Label>
          <select
            id="urgency"
            name="urgency"
            value={jobData.urgency}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="urgent">Urgent</option>
            <option value="normal">Normal</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="numberOfPosition">Number of Positions</Label>
          <Input
            type="number"
            id="numberOfPosition"
            name="numberOfPosition"
            value={jobData.numberOfPosition}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-2">
          <Label htmlFor="description">Job Description</Label>
          <Textarea
            id="description"
            name="description"
            value={jobData.description}
            onChange={handleChange}
            placeholder="Describe the job in detail..."
            required
          />
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-2">
          <Label htmlFor="requirements">Requirements</Label>
          <Textarea
            id="requirements"
            name="requirements"
            value={jobData.requirements}
            onChange={handleChange}
            placeholder="Enter requirements separated by commas"
            required
          />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <Button type="submit" className="">
            {formSubmission ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              "Send Propusol"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
