import React from "react";
import { CiCamera } from "react-icons/ci";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col items-center bg-yellow-100 w-[1200px] pb-16">
        <h2 className="category-heading text-center text-[50px] mt-4 pb-12">
          Categories
        </h2>
        <ul className="category-list flex justify-around w-full">
          <div className="flex flex-col items-center">
            <Image
              src="/Images/jeans_icon.png"
              alt="My Icon"
              width={32}
              height={32}
            />
            <li>Category 1</li>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Images/saree_icon.png"
              alt="My Icon"
              width={32}
              height={32}
            />
            <li>Category 2</li>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Images/kurta_icon.png"
              alt="My Icon"
              width={32}
              height={32}
            />
            <li>Category 3</li>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Images/top_icon.png"
              alt="My Icon"
              width={32}
              height={32}
              className=""
            />
            <li>Category 4</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
