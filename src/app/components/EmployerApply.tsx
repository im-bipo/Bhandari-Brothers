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
import { EmployerApplyForm } from "./EmployerApplyForm";

const EmployerApply = () => {
  const device = useMediaQuery();
  const [open, setOpen] = useState(false);

  return device === "desktop" ? (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button className="bg-white hover:bg-red-700 hover:text-white text-primary">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[100]">
        <EmployerApplyForm setOpen={setOpen} />
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-white hover:bg-red-700 hover:text-white text-primary">
          Apply Now
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-4">
        <EmployerApplyForm setOpen={setOpen} />
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

export default EmployerApply;

