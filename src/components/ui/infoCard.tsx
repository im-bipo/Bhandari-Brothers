import { cn } from "@/lib/utils";
import React from "react";

const InfoCardHeader = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-4xl font-semibold mb-4 relative z-10 min-h-24", className)}
    {...props}
  >
    {children}
  </h2>
));
InfoCardHeader.displayName = "InfoCardHeader";

const InfoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm mb-4 relative z-10", className)}
    {...props}
  >
    {children}
  </p>
));
InfoCardDescription.displayName = "InfoCardDescription";

const InfoCard = ({
  children,
  variant,
}: Readonly<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>) => {
  return (
    <div
      className={`max-w-[38rem] px-10 py-16 text-white rounded-md relative overflow-hidden group ${
        variant === "primary" ? "bg-primary hover:bg-red-600" : "bg-secondary hover:bg-green-800"
      } hover:scale-[1.005] duration-200`}
    >
      {children}
      <div className="-rotate-45 absolute flex flex-col items-end -right-20 top-10">
        <div
          className={`w-40 h-10 rounded-3xl relative z-0 transition-all duration-200 group-hover:w-20 ${
            variant === "primary" ? "bg-[#FF4E4E]" : "bg-[#299F67]"
          }`}
        ></div>
        <div
          className={`w-60 h-14 rounded-3xl relative z-0 my-3 transition-all duration-200 group-hover:w-52 ${
            variant === "primary" ? "bg-[#FF4E4E]" : "bg-[#299F67]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export { InfoCard, InfoCardHeader, InfoCardDescription };
