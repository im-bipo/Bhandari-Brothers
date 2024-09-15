"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Globe2Icon, MailIcon, MapIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    reset();
  };

  return (
    <div className="container mx-auto py-10 px-4 lg:px-8">
      <h2 className="text-3xl font-semibold text-primary mb-6">Contact Us</h2>
      <OfficeLocation />
      <section className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            If you have any questions, feel free to reach out to us. We’re here
            to help!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.1783999815775!2d14.49387614583548!3d35.8805347992137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e51c149e1945f%3A0xe27158eda02e1d18!2sBhandari%20Brothers%20Group!5e0!3m2!1sen!2snp!4v1726428851274!5m2!1sen!2snp"
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

const OfficeLocation = () => {
  return (
    <>
      <div className="container grid gap-4 my-4 md:grid-cols-2 bg-gray-100 p-6 rounded-lg items-center space-x-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold  mb-4">
            Bhandari Brothers Group Headquarters{" "}
          </h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <MailIcon className="text-xl text-primary" />
              <p className="text-lg">info@bhandaribrothers.com</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <PhoneCallIcon className="text-xl text-primary" />
              <p className="text-lg">+3567787789, +35627136935</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Globe2Icon className="text-xl text-primary" />
              <Link href="/" className="text-lg text-blue-600 hover:underline">
                Visit our website
              </Link>
            </div>
            <div className="flex space-x-2 text-gray-700">
              <MapIcon className="text-lg text-primary" />
              <p className="text-lg">
                Level 2, Hall B DL Business Center, Triq L-Irham C/W Triq
                Siimpson Marsa Malta
              </p>
            </div>
          </div>
        </div>
        {/* Image  */}
        <div className="">
          <Image
            width={1000}
            height={1000}
            src="/images/md/Prakash Bhandari.jpg"
            alt="Office Photo"
            className="w-full h-[20rem] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* other locaiton */}

      <section className="grid gap-4 md:grid-cols-2 rounded-lg items-center">
        <article className="flex-1 p-4 bg-gray-100 ">
          <h1 className="text-3xl font-bold  mb-4">Our Bulgaria Office</h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <MailIcon className="text-xl text-primary" />
              <p className="text-lg">info@bhandaribrothers.com</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <PhoneCallIcon className="text-xl text-primary" />
              <p className="text-lg">+3567787789, +35627136935</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Globe2Icon className="text-xl text-primary" />
              <Link href="/" className="text-lg text-blue-600 hover:underline">
                Visit our website
              </Link>
            </div>
            <div className="flex space-x-2 text-gray-700">
              <MapIcon className="text-2xl text-primary" />
              <p className="text-lg">
                Burgas, Municipality: Burgas City: Burgas, p.k. 8000 BIvd.
                Maragidik No. 19, fl. 2, apartment office 1
              </p>
            </div>
          </div>
        </article>
        {/* greece */}
        <article className="flex-1 p-4 bg-gray-100 h-full">
          <h1 className="text-3xl font-bold  mb-4">Our Greece Office</h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <MailIcon className="text-xl text-primary" />
              <p className="text-lg">info@bhandaribrothers.com</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <PhoneCallIcon className="text-xl text-primary" />
              <p className="text-lg">+3567787789, +35627136935</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Globe2Icon className="text-xl text-primary" />
              <Link href="/" className="text-lg text-blue-600 hover:underline">
                Visit our website
              </Link>
            </div>
            <div className="flex space-x-2 text-gray-700">
              <MapIcon className="text-lg text-primary" />
              <p className="text-lg">
                34 Parasiou, Athens Centre 104 40, Greece
              </p>
            </div>
          </div>
        </article>

        {/* Triforce Educaiton Consultancy */}
        <article className="flex-1 p-4 bg-gray-100 h-full">
          <h1 className="text-3xl font-bold  mb-4">
            Triforce Educaiton Consultancy
          </h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <MailIcon className="text-xl text-primary" />
              <p className="text-lg">education@globaltriforce.com</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <PhoneCallIcon className="text-xl text-primary" />
              <p className="text-lg">+3567787789, +35627136935</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Globe2Icon className="text-xl text-primary" />
              <Link href="https://www.globaltriforce.com" className="text-lg text-blue-600 hover:underline">
                Visit our website
              </Link>
            </div>
            <div className="flex space-x-2 text-gray-700">
              <MapIcon className="text-lg text-primary" />
              <p className="text-lg">Shantinagar Marga, Kathmandu.</p>
            </div>
          </div>
        </article>
        {/* Triforce Tour and Travel Agency */}
        <article className="flex-1 p-4 bg-gray-100 h-full">
          <h1 className="text-3xl font-bold  mb-4">
          Triforce Tour and Travel Agency 
          </h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <MailIcon className="text-xl text-primary" />
              <p className="text-lg">travel@globaltriforce.com</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <PhoneCallIcon className="text-xl text-primary" />
              <p className="text-lg">+3567787789, +35627136935</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Globe2Icon className="text-xl text-primary" />
              <Link href="https://www.globaltriforce.com" className="text-lg text-blue-600 hover:underline">
                Visit our website
              </Link>
            </div>
            <div className="flex space-x-2 text-gray-700">
              <MapIcon className="text-lg text-primary" />
              <p className="text-lg">Shantinagar Marga, Kathmandu.</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
