import SubmitButton from "@/components/custom/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { newApplication } from "@/appwrite/applicaiton";
import { useToast } from "@/components/hooks/use-toast";

type JobApplicationFormProps = {
  className?: string;
  jobId: string;
  setOpen: (value: boolean) => void;
};

type Inputs = {
  name: string;
  email: string;
  coverLetter: string;
  resume: FileList;
};

const JobApplicationForm = ({
  className,
  jobId,
  setOpen,
}: JobApplicationFormProps) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const [submitError, setSubmitError] = useState<string | null>(null); // Add state for submission errors

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitError(null); // Reset the error state on new submission attempt
    try {
      // Create form data for the application
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("jobId", jobId);
      formData.append("coverLetter", data.coverLetter);
      formData.append("resume", data.resume[0]);

      // Submit the application
      const res = await newApplication(formData);

      setOpen(false);
      toast({
        variant: "sucessfull",
        title: "Your Response is recorded",
        description: "Keep checking your mailbox for updates",
      });
    } catch (_) {
      setSubmitError("Failed to submit the application. Please try again.");
    }
  };

  return (
    <>
      <form
        className={cn("grid items-start gap-4", className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" {...register("name")} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" {...register("email")} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            placeholder="I am an experienced person in this field..."
            {...register("coverLetter", {
              required: "Cover Letter is required",
            })}
          />
          {errors.coverLetter && (
            <span className="text-red-500">
              {errors.coverLetter.message as string}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="resume">C.V</Label>
          <Input
            type="file"
            accept="image/*,.pdf"
            {...register("resume", { required: "Resume is required" })}
          />
          {errors.resume && (
            <span className="text-red-500">
              {errors.resume.message as string}
            </span>
          )}
        </div>

        {/* Display submission error message */}
        {submitError && <div className="text-red-500">{submitError}</div>}

        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </>
  );
};

export default JobApplicationForm;
