import React from "react";
import Link from "next/link";

const FooterMain: React.FC = () => {
  return (
    <footer className="text-black bg-white pt-12 pb-8 flex justify-evenly">
      <Link legacyBehavior href={"/"}>
        <a className="flex  items-center">
        <img
                src="/logo2.png"
                className="w-64"
                alt="logo"
              />
        </a>
      </Link>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Shop</h3>
        <ul>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Clothing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Accessories
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Shoes
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">About</h3>
        <ul>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Our Story
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Press
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Support</h3>
        <ul>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500"></a>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Policies</h3>
        <ul>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Cancellation and Returns
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Rental Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
