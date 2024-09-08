import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-red-500  bottom-0 border-t-2 rounded-full animate-[spin_3s_linear_infinite]"></div>
    </div>
  );
};

export default Loading;
