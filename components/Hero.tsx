import React, { useState, useEffect } from "react";

const banners = ["/banner1.png", "/banner2.png", "/banner3.png"];

const Hero = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((bannerIndex + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [bannerIndex]);

  return (
    // mt-24 to get top margin a bit
    <div className="   relative flex justify-center ">
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt={`banner${index}`}
          className={`banner px-20 h-[700px]  ${
            index === bannerIndex ? "" : "hidden"
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="flex flex-col">
          <span className="text-4xl font-semibold mb-1 text-white">
            Traditions Preserved
          </span>
          <span className="text-xl text-white">Prices Reasonable</span>
        </div>
      </div>
    </div>
    // <div className=" relative flex justify-center">
    //   <img
    //     src="/banner1.png"
    //     alt="banner1"
    //     className="banner px-20  h-[500px] mb-10 "
    //   />
    //   <div className="absolute inset-0 flex items-center justify-center text-center ">
    //     <div className="flex flex-col">
    //       <span className="text-4xl font-semibold mb-1  text-white">
    //         Traditions Preserved
    //       </span>
    //       <span className="text-xl text-white">
    //         Prices Reasonable
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
