import * as React from "react";

import { cn } from "@/lib/utils";

const Job = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 w-full ",
      className
    )}
    {...props}
  />
));
Job.displayName = "Job";

const JobBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
JobBody.displayName = "JobBody";

const JobTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
JobTitle.displayName = "JobTitle";

const JobDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
JobDescription.displayName = "JobDescription";

const JobHiringCompany = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(" text-secondary dark:text-slate-400", className)}
    {...props}
  />
));
JobHiringCompany.displayName = "JobHiringCompany";

const JobSalaryRange = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-medium dark:text-slate-400", className)}
    {...props}
  />
));
JobSalaryRange.displayName = "JobSalaryRange";

const JobTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex gap-1 bg-gray-300 py-1 px-2 rounded-md", className)}
    {...props}
  />
));
JobTags.displayName = "JobTags";

export {
  Job,
  JobBody,
  JobTitle,
  JobSalaryRange,
  JobHiringCompany,
  JobTags,
  JobDescription,
};
