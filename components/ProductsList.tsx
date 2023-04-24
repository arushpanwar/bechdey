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

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <Link href="/products">Top Products</Link>
          </h1>
          <div className="flex justify-center">
            {lastFourProducts.map((product) => (
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
