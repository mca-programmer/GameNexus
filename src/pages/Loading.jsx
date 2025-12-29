import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <title>Loading...</title>

      <MoonLoader size={70} color="#B8FF00" speedMultiplier={1.2} />

      <p className="mt-6 text-[#B8FF00] text-lg font-medium tracking-widest animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
