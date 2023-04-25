import React from "react";

const PurchaseForm = () => {
  return (
    <div className="grid grid-cols-2 ">
      <form className="flex flex-col bg-white p-8 ">
        <div className="grid mb-3 ">
          <div className="flex flex-col mb-3">
            <label
              htmlFor="email"
              className="block text-neutral-800 font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="flex flex-col mb-3">
            <label
              htmlFor="first"
              className="block text-neutral-800 font-semibold mb-2"
            >
              First Name :
            </label>
            <input
              type="text"
              id="first"
              name="first"
              className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label
              htmlFor="last"
              className="block text-neutral-800 font-semibold mb-2"
            >
              Last Name :
            </label>
            <input
              type="text"
              id="last"
              name="last"
              className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="grid mb-3">
          <div className="flex flex-col mb-3">
            <label
              htmlFor="address"
              className="block text-neutral-800 font-semibold mb-2"
            >
              Address :
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="grid mb-3">
          <div className="flex flex-col mb-3">
            <label
              htmlFor="phone"
              className="block text-neutral-800 font-semibold mb-2"
            >
              Phone :
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="grid grid-cols-6 mb-3">
          <div>
            <button
              type="button"
              className="text-neutral-800 bg-amber-300  hover:text-neutral-800 font-semibold py-2 px-4 rounded shadow-md outline-none hover:outline-red-800 hover:bg-amber-400"
            >
              return
            </button>
          </div>
          <div>
          <button
              type="submit"
              className="bg-red-800 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </form>
      <div className="bg-white flex justify-center">
        <div className="flex flex-col items-center p-8 w-3/5">
          <div className="flex justify-between w-full items-center">
            <img src="/logo.png" className="w-16 h-16" alt="logo" />
            <div className="flex flex-col">
              <span className="text-lg">Loom Jaquar Sleeveless Dress</span>
              <span className="text-neutral-600">XL</span>
            </div>
          </div>
          {/* <label htmlFor="cuopon" className="block text-neutral-800">
        Cuopons
        </label> */}

          <div className="flex justify-between mt-5 w-full">
            <input
              type="text"
              id="cuopon"
              name="cuopon"
              placeholder="Gift card or Coupon code"
              className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full mr-3"
            />
            <button
              type="submit"
              className="bg-red-800 hover:bg-amber-300 hover:text-neutral-800 text-white py-2 px-2 ml-2 rounded"
            >
              Apply
            </button>
          </div>

          <div className="flex flex-row justify-between items-end w-full mt-4">
            <div className="text-xl text-neutral-800">Total</div>
            <div>
              <span className="text-xs text-neutral-600 pr-2">INR </span>
              <span className="text-lg text-neutral-800">₹2,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseForm;
