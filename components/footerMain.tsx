import React from "react";

const FooterMain: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Shop</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Shoes
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">About</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Support</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Policies</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Cancellation and Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Rental Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
