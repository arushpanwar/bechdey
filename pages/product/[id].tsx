import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import Image from "next/image";
import { log } from "console";

const supabaseUrl = "https://zigydihmnwehecgeokqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZ3lkaWhtbndlaGVjZ2Vva3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNTU5MzcsImV4cCI6MTk5NzgzMTkzN30.X5tDt3Pk0dk_TPHzr3us_lqHDJuRZ6YpT0zMAeIIfTE";

const supabase = createClient(supabaseUrl, supabaseKey);

const Post = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from<Product>("products")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setProducts(data);
      }
    }

    fetchProducts();
  }, []);

  const router = useRouter();
  const { id } = router.query;
  const selectedProduct = products.find((product) => product.id == id);

  // console.log(products);
  // console.log(selectedProduct);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={selectedProduct?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {selectedProduct?.color}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium tracking-wider mb-4">
                {selectedProduct?.name}
              </h1>
              <span className="text-2xl text-gray-900">
                Rs. {selectedProduct?.price}.00
              </span>
              <div className="flex items-center my-5">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
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
              <div className="flex flex-col items-center justify-center border-green-950 border rounded-lg w-96 pt-4 pb-6">
                <h1 className="flex justify-center items-center p-2 text-xl font-semibold">
                  STUNNING DEALS
                </h1>
                <h1 className="flex justify-center items-center pt-2">
                  Get Rs. 250 off on First Purchase | Use Code:
                </h1>
                <h1 className="flex justify-center items-center">FIRST250</h1>
                <h1 className="flex justify-center items-center p-2">OR</h1>
                <h1 className="flex justify-center items-center p-2">
                  Get Extra 15% Off | Use Code: SAAKI15
                </h1>
                <h1 className="flex justify-center items-center p-2">OR</h1>
                <h1 className="flex justify-center items-center pt-2">
                  Avail POPcoins discounts along with
                </h1>
                <h1 className="flex justify-center items-center">
                  existing discounts at checkout
                </h1>
              </div>
              <div className="py-10">
                <p className="text-lg font-semibold">Product Description:</p>
                <p className="leading-relaxed">
                  {selectedProduct?.description} lorem1
                </p>
              </div>
              <button className="flex w-96 bg-gray-600 text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
