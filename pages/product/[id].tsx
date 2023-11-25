import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import PurchaseForm from "@/components/PurchaseForm";
import { supabase } from "@/lib/supabase";

const Post = () => {
  const [products, setProducts] = useState([]);
  const [purchased, setPurchased] = useState(false);
  
  const router = useRouter();
  const { id } = router.query;

  const handleBuyNowClick = () => {
    setPurchased(true);
  }

  useEffect(() => {
    async function fetchProducts() {
      const { data, error }:any = await supabase
        .from("products")
        .select("*")

      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setProducts(data);
      }
    }

    fetchProducts();
  }, []);

  const selectedProduct:any = products.find((product:any) => product.id == id);

  // console.log(products);
  // console.log(selectedProduct);

  return (
    <>
    {purchased ? (
        <PurchaseForm id={id} name={selectedProduct?.name} price={selectedProduct?.price} image={selectedProduct?.image} />
      ) : (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={selectedProduct?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-600 tracking-widest">
                {selectedProduct?.color}
              </h2>
              <h1 className="text-neutral-900 text-3xl title-font font-semibold tracking-wider mb-4">
                {selectedProduct?.name}
              </h1>
              <span className="text-2xl text-neutral-800">
              ₹{selectedProduct?.price}.00
              </span>
              <div className="flex items-center my-5">
                <span className="mr-3 text-neutral-700">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-neutral-600 py-2 focus:outline-none focus:ring-1 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-red-800 border rounded-lg w-96 pt-4 pb-6">
                <h1 className="flex justify-center items-center p-2 text-xl text-neutral-800 font-bold">
                  STUNNING DEALS
                </h1>
                <h1 className="flex justify-center items-center pt-2 font-semibold text-neutral-800">
                  Get Rs. 250 off on First Purchase | Use Code:
                </h1>
                <h1 className="flex justify-center items-center font-semibold text-red-800">FIRST250</h1>
                <h1 className="flex justify-center items-center font-semibold text-neutral-800 p-2">OR</h1>
                <h1 className="flex justify-center text-neutral-800 font-semibold items-center p-2">
                  Get Extra 15% Off | Use Code: <span className="text-red-800">&nbsp; RENTW15</span> 
                </h1>
                <h1 className="flex justify-center font-semibold text-neutral-800 items-center p-2">OR</h1>
                <h1 className="flex justify-center font-semibold text-neutral-800 items-center pt-2">
                  Avail Rcoins discounts along with
                </h1>
                <h1 className="flex justify-center font-semibold text-neutral-800 items-center">
                  existing discounts at checkout
                </h1>
              </div>
              <div className="py-10">
                <p className="text-lg text-neutral-800 font-semibold">Description:</p>
                <p className="leading-relaxed text-neutral-800">
                  {selectedProduct?.description} 
                </p>
              </div>
              <button onClick={handleBuyNowClick} className="flex w-96 bg-red-600 text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded-lg">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default Post;
