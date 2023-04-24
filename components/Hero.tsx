import React from "react";

const Hero = () => {
  return (
    <div className=" relative flex justify-center">
      <img
        src="/banner1.png"
        alt="banner1"
        className="banner px-20  h-[500px] mb-10 "
      />
      <div className="absolute inset-0 flex items-center justify-center text-center ">
        <div className="flex flex-col">
          <span className="text-4xl font-semibold mb-1  text-white">
            Traditions Preserved
          </span>
          <span className="text-xl text-white">
            Prices Reasonable
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
