import React from 'react';

const Features = () => {
  return (
    <div className="bg-light-900 shadow-lg p-6">
      <h2 className="text-5xl font-sans font-semibold text-black mb-8 text-center ">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-light-700 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-mono text-gray-375 mb-5">Affordable Rates</h3>
          <p className="text-gray-400">Rentway enables users to access high-quality products at affordable rates, making it an ideal solution for short-term product use.</p>
        </div>
        <div className="bg-light-700 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-mono text-gray-375 mb-5">Extra Income</h3>
          <p className="text-gray-400">By renting out their unused products, owners can earn extra income with Rentway.</p>
        </div>
        <div className="bg-light-700 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-mono text-gray-375 mb-5">User-Friendly Interface</h3>
          <p className="text-gray-400">Rentway provides a user-friendly interface that allows users to easily rent and list products.</p>
        </div>
        <div className="bg-light-700 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-mono text-gray-375 mb-5">Secure Payment System</h3>
          <p className="text-gray-400">Rentway offers a secure payment system to ensure safe transactions between renters and owners.</p>
        </div>
        <div className="bg-light-700 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-mono text-gray-375 mb-5">Optimized Development Processes</h3>
          <p className="text-gray-400">Rentway's use of TypeScript ensures optimized development processes for faster feature releases and updates.</p>
        </div>
        <div className="bg-light-700 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-mono text-gray-375 mb-5">Sustainable Rental System</h3>
          <p className="text-gray-400">Rentway aims to reduce the environmental impact of fast fashion by providing a sustainable and equitable rental system.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
