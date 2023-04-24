import React from "react";
import { CiCamera } from "react-icons/ci";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col items-center bg-yellow-100 w-[1200px] pt-6 pb-16">
        <h2 className="category-heading text-center text-5xl font-semibold text-neutral-800 mt-4 pb-12">
          Categories
        </h2>
        <ul className="category-list flex justify-around w-full">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 h-16 w-16 flex justify-center items-center rounded-md">
            <Image
              src="/Images/jeans_icon.png"
              alt="My Icon"
              width={40}
              height={40}
            />
            <li className="text-xl font-light text-gray-550 mb-5">Jeans</li>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 h-16 w-16 flex justify-center items-center rounded-md">
            <Image
              src="/Images/saree_icon.png"
              alt="My Icon"
              width={40}
              height={40}
            />
            <li className="text-xl font-light text-gray-550 mb-5">Saree</li>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 h-16 w-16 flex justify-center items-center rounded-md">
            <Image
              src="/Images/kurta_icon.png"
              alt="My Icon"
              width={40}
              height={40}
            />
            <li className="text-xl font-light text-gray-550 mb-5">Shirts</li>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 h-16 w-16 flex justify-center items-center rounded-md">
            <Image
              src="/Images/top_icon.png"
              alt="My Icon"
              width={40}
              height={40}
            />
            <li className="text-xl font-light text-gray-550 mb-5">Tops</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
