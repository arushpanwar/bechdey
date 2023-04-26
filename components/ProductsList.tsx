import Link from "next/link";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { supabase } from "../lib/supabase";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
}

const ProductsList = () => {
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

  const lastFourProducts = products.slice(-4);
  const nextFourProducts = products.slice(-8,-4);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-16 mt-28 pb-14 mx-auto bg-white">
          <h1 className="flex justify-center  text-5xl font-semibold mb-10 text-neutral-800">
            <Link href="/products">Top Products</Link>
          </h1>
          <div className="flex justify-center">
            {lastFourProducts.map((product) => (
              <>
              <Product key={product.id} product={product} />
            </>
          ))}
          </div>
          <div className="flex justify-center">
            {nextFourProducts.map((product) => (
              <>
              <Product key={product.id} product={product} />
            </>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
