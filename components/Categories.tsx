import React from "react";
import { CiCamera } from "react-icons/ci";

const Categories = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col items-center bg-yellow-100 w-[1200px] h-[250px]">
        <h2 className="category-heading text-center text-[50px] mt-4">Categories</h2>
        <ul className="category-list flex justify-around w-full">
          <div className="flex flex-col items-center">
            <CiCamera className="text-5xl" />
            <li>Category 1</li>
          </div>
          <div className="flex flex-col items-center">
            <CiCamera className="text-5xl" />
            <li>Category 2</li>
          </div>
          <div className="flex flex-col items-center">
            <CiCamera className="text-5xl" />
            <li>Category 3</li>
          </div>
          <div className="flex flex-col items-center">
            <CiCamera className="text-5xl" />
            <li>Category 4</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
