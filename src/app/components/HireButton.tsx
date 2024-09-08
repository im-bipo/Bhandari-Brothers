"use client";
import useMediaQuery from "@/components/hooks/MediaQuery";
import Link from "next/link";

export const HireButton = () => {
  "use client";
  const device = useMediaQuery();
  if (device !== "desktop") {
    return (
      <Link href="/hire-now">
        <button className="ml-5 bg-primary text-white font-bold my-4 py-2 px-4 rounded-md">
          Hire Now
        </button>
      </Link>
    );
  }

  return (
    <div className="relative">
      <Link href="/hire-now">
        <div className="group">
          <div className="absolute top-[3.2rem] left-[4rem] font-semibold text-white text-3xl z-10 group-hover:scale-110 duration-300 ease-in-out">
            Hire Now
          </div>
          <svg
            width="255"
            height="145"
            viewBox="-10 0 255 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-0 group-hover:scale-110 duration-300 ease-in-out"
          >
            <path
              d="M16.095 3.17924C17.7216 1.06641 20.2761 0 22.9425 0H240C245.523 0 250 4.47715 250 10V135C250 140.523 245.523 145 240 145H22.647C19.5725 145 16.672 143.581 15.0227 140.986C9.0548 131.597 -4.53949 106.183 -4.53949 69.5C-4.53949 32.6676 9.1654 10.8816 16.095 3.17924Z"
              stroke="green"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M20.095 3.17924C21.7216 1.06641 24.2761 0 26.9425 0H245C250.523 0 255 4.47715 255 10V135C255 140.523 250.523 145 245 145H27.647C24.5725 145 21.672 143.581 20.0227 140.986C14.0548 131.597 0.46051 106.183 0.46051 69.5C0.46051 32.6676 14.1654 10.8816 20.095 3.17924Z"
              fill=""
              className="fill-primary group-hover:fill-red-600 hover:cursor-pointer"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};
