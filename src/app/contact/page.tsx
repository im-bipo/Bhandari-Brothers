"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type formDataType = {
  name: string;
  email: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formDataType>();

  const onSubmit = (data: formDataType) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="container mx-auto py-10 px-4 lg:px-8">
      {/* Contact Form and Map Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            If you have any questions, feel free to reach out to us. We’re here
            to help!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="text-sm font-semibold">
                Name
              </Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required." })}
                className="mt-2 w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-sm font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address.",
                  },
                })}
                className="mt-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <Label htmlFor="message" className="text-sm font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required." })}
                className="mt-2 w-full"
                placeholder="Write your message here"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary-dark w-full py-2"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.260887267217!2d85.31748181500196!3d27.70895548278944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd2f2c04a9%3A0x8df2be1a1a5f3c9b!2sKathmandu!5e0!3m2!1sen!2snp!4v1620303692604!5m2!1sen!2snp"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
