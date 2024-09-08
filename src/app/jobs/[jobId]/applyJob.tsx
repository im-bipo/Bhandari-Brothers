"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/components/hooks/MediaQuery";
import JobApplicationForm from "./JobApplicationForm";
import Link from "next/link";

const ApplyJob = ({ jobId }: { jobId: string }) => {
  const device = useMediaQuery();
  const [open, setOpen] = useState(false);

  return device === "desktop" ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Apply Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <JobApplicationForm jobId={jobId} setOpen={setOpen} />
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Apply Now</Button>
      </DrawerTrigger>
      <DrawerContent>
        <JobApplicationForm jobId={jobId} setOpen={setOpen} className="px-4" />
        <DialogDescription></DialogDescription>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ApplyJob;
