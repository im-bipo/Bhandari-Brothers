import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="bg-black hidden md:block">
        <div className="container text-white grid grid-cols-3 py-1">
          <div>
            <marquee behavior="scroll" direction="right" scrollamount={5}>
              We are ISO 9001:2015 Certified | Our DIER License Number:
              00267-2024-00279-2024
            </marquee>
          </div>

          <div className="text-center">Bhandari Brothers Group</div>

          <div>
            <marquee behavior="scroll" direction="left" scrollamount={5}>
              We are in Malta, Nepal, Dubai, Bulgaria, Greece
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
