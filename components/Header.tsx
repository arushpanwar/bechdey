import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font flex justify-around">
      <div className="container flex flex-wrap py-4 px-8 flex-col md:flex-row items-center ">
        <Link legacyBehavior href={"/"}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo.png" className="w-10 h-10 -rotate-45" alt="logo" />
            <span className="ml-3 font-semibold italic text-2xl">Rentway</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Top Products</a>
          <a className="mr-5 hover:text-gray-900">Product List</a>
          <a className="mr-5 hover:text-gray-900">About us</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Logout
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
