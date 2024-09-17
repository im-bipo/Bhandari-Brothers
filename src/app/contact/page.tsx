"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Globe2Icon, MailIcon, MapIcon, PhoneCallIcon } from "lucide-react";
import { toast } from "@/components/hooks/use-toast";
import Image from "next/image";
import Link from "next/link";
import { sendMail } from "@/lib/mail";

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
    sendMail({
      subject: "Contact Us",
      html: `<ul>
      <li>Name : ${data.name}</li>
      <li>Email : ${data.email}</li>
      <li>Message : ${data.message}</li>
      </ul>`,
    });
    toast({
      variant: "sucessfull",
      title: "Form submitted",
      description: "We'll get back to you soon!",
    });
    reset();
  };

  return (
    <div className="container mx-auto py-10 px-4 lg:px-8">
      <div>
        <div className="grid lg:grid-cols-2 text-slate-700 pb-6">
          {/* left */}
          <div className="relative sm:mx-12">
            <Image
              src="/images/md/Rajendra Bhattrai.png"
              width={1240}
              height={1240}
              alt="Service Image"
              className="w-full object-bottom h-[30rem] object-cover rounded-md bg-gray-50 rounded-b-[0px] relative z-[2] shadow-lg"
            />
            <div
              id="controls"
              className=" flex items-center p-5 bg-gray-50 h-24 rounded-b-[25px] relative z-[2] shadow-lg"
            >
              <div className="pl-3">
                <h6 className="font-medium text-primary">Rajendra Bhattarai</h6>
                <p className="text-gray-400">COO - Bhandari Brothers</p>
              </div>
            </div>
            <div className="w-[90%] shadow-lg rounded-b-3xl h-8 bg-gray-200 m-auto relative z-[1] bottom-3"></div>
            <div className="w-[70%] shadow-lg rounded-b-3xl h-5 bg-gray-200 m-auto relative z-0 bottom-3"></div>
          </div>
          {/* right */}
          <div className="space-y-2 pb-4">
            <h2 className="text-primary font-medium text-lg">
              Welcome to Bhandari Brothers
            </h2>
            <p>
              Since our inception in 2019, we have been committed to providing
              the right person for the right job through our recruitment
              services. Initially operating as Europe Staff Limited, we set out
              to make a significant impact in the recruitment sector.
            </p>
            <p>
              As we expanded, we explored the cleaning sector and restaurant
              business under separate brands. However, we soon recognized that
              our core strengths were best aligned with recruitment and related
              services. We then ventured into the fleet of taxi services and
              food courier services, leveraging our expertise to deliver
              exceptional results.
            </p>
            <p>
              Consequently, we transitioned our recruitment services to Bhandari
              Group Limited, which is now DIER Licensed and ISO Certified. Our
              commitment remains steadfast in recruiting and acting as a temping
              agency, focusing on placing the right person at the right job and
              ensuring the optimal fit for both employees and employers.
            </p>
            <p>
              Bhandari Brothers symbolizes the strength in unity of Brothers and
              represents more than just a surname—it stands as a robust brand
              committed to excellence . The name &quot;Bhandari&quot; means
              treasurer, reflecting our role as custodians of experienced
              candidates who will help fulfill our vision. Our goal is to expand
              horizontally across Europe and vertically into Dubai and Nepal,
              positioning ourselves as a leading one-stop solution for
              interviews, recruitment, and temping services.
            </p>
            <p>
              Thank you for being part of our journey. Together, we strive to
              achieve excellence and make Bhandari Brothers a premier name
              in the industry.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-primary mb-6">
        Our office locations
      </h2>

      {/* our office location  */}
      <HeadOffice />
      <section className="grid gap-4 md:grid-cols-2 rounded-lg items-center">
        <OfficeLocation
          location="Our Bulgaria Office"
          mail="info@bhandaribrothers.com"
          phone="+3567787789, +35627136935"
          address="Burgas, Municipality: Burgas City: Burgas, p.k. 8000 BIvd.
                Maragidik No. 19, fl. 2, apartment office 1"
          website="/"
        />
        <OfficeLocation
          location="Our Greece Office"
          mail="info@bhandaribrothers.com"
          phone="+3567787789, +35627136935"
          address="34 Parasiou, Athens Centre 104 40, Greece"
          website="/"
        />
      </section>

      {/* find Out more */}
      <h2 className="text-3xl font-semibold text-primary my-4 border-t pt-4">
        Find Our More
      </h2>
      <section className="grid gap-4 md:grid-cols-2 rounded-lg items-center">
        <OfficeLocation
          location="Triforce Human Resources Consultancy"
          mail="hr.mastatriforce@gmail.com"
          phone="+971567200669"
          address="AI Rostamani Tower B M02, Sheikh Zayed Road, Dubai UAE"
          website="https://www.globaltriforce.com"
        />
        <OfficeLocation
          location="Global Tri Force Manpower Solution"
          mail="info@globaltriforce.com"
          phone="+977-9767821051, +977-9767821052"
          address="Samakhusi, Kathmandu"
          website="https://www.globaltriforce.com"
        />
        <OfficeLocation
          location="Global Tri Force Education Consultancy"
          mail="edu@globaltriforce.com "
          phone="01-5912208, +977-9823556113"
          address="Shantinagar Marga, Kathmandu"
          website="https://www.globaltriforce.com"
        />
        <OfficeLocation
          location="Tri Force Tour and Travel Agency"
          mail="travel@globaltriforce.com"
          phone="+977-9767821051, +977-9767821052"
          address="Shantinagar Marga, Kathmandu"
          website="https://www.globaltriforce.com"
        />
      </section>

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

const OfficeLocation = ({
  location,
  mail,
  phone,
  website,
  address,
}: {
  location: string;
  mail: string;
  phone: string;
  website: string;
  address: string;
}) => {
  return (
    <>
      <div className="flex-1 p-4 bg-gray-100 h-full">
        <h1 className="text-2xl font-semibold  mb-4">{location}</h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <MailIcon className="text-xl text-primary" />
            <p className="text-lg">{mail}</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <PhoneCallIcon className="text-xl text-primary" />
            <p className="text-lg">{phone}</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Globe2Icon className="text-xl text-primary" />
            <Link
              href={website}
              className="text-lg text-blue-600 hover:underline"
            >
              Visit our website
            </Link>
          </div>
          <div className="flex space-x-2 text-gray-700">
            <MapIcon className="text-lg text-primary" />
            <p className="text-lg">{address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const HeadOffice = () => {
  return (
    <section className="container grid gap-4 my-4 md:grid-cols-2 bg-gray-100 p-6 rounded-lg items-center space-x-6">
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
              Level 2, Hall B DL Business Center, Triq L-Irham C/W Triq Siimpson
              Marsa Malta
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
    </section>
  );
};
