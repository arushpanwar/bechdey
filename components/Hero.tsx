import React from "react";

const Hero = () => {
  return (
    <div className=" relative flex justify-center">
      <img
        src="/banner1.png"
        alt="banner1"
        className="banner px-20  h-[500px] "
      />
      <div className="absolute inset-0 top-10 flex items-center justify-center text-center ">
        <div className="flex flex-col">
          <span className="text-4xl font-semibold mb-1  text-white">
            Traditions Preserved
          </span>
          <span className="text-xl font-medium text-neutral-300">
            Pices Reasonable
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
