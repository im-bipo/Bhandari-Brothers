"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendMail } from "@/lib/mail";

const FormSchema = z.object({
  companyName: z.string().min(1, { message: "Company Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  contactNumber: z.string().min(1, { message: "Contact Number is required" }),
  website: z.string().url().optional(),
  position: z.string().min(1, { message: "Please select a position" }),
  country: z.string().min(1, { message: "Please select a country" }),
  note: z.string().optional(),
});

type Inputs = z.infer<typeof FormSchema>;

export function EmployerApplyForm({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) {
  const form = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: Inputs) => {
    setSubmitError(null);
    try {
      sendMail({
        subject: "Employer Application",
        html: `<ul>
        <li>Companey Email : ${data.email}</li>
        <li>Companey Name : ${data.companyName}</li>
        <li>Contact Number : ${data.contactNumber}</li>
        <li>Website : ${data.website}</li>
        <li>Position : ${data.position}</li>
        <li>Conuntry : ${data.country}</li>
        <li>Note : ${data.note}</li>
        </ul>`,
      });
      setOpen(false);
      toast({
        variant: "sucessfull",
        title: "Form submitted",
        description: "We'll get back to you soon!",
      });
    } catch (error) {
      setSubmitError("Failed to submit the application. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-1 bottom-2"
      >
        {/* Company Name */}
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the Company</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email & Contact Number */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Website */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Select Position & Country */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Position</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Manager">Manager</SelectItem>
                      <SelectItem value="Developer">Developer</SelectItem>
                      <SelectItem value="Designer">Designer</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Country</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Nepal">Nepal</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="USA">USA</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Note */}
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Leave your message here..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Error */}
        {submitError && <div className="text-red-500">{submitError}</div>}

        {/* Submit Button */}
        <Button type="submit" className="w-full lg:w-[unset]">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default EmployerApplyForm;
