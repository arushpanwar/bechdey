import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Product from "@/components/Product";
import { supabase } from "../lib/supabase";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
}

const Products = () => {
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

  return (
    <>
      <div className="flex flex-col justify-center">
  {products.reduce((rows, product, index) => {
    if (index % 4 === 0) rows.push([]);
    rows[rows.length - 1].push(product);
    return rows;
  }, []).map((row, index) => (
    <div key={index} className="flex justify-center">
      {row.map((product) => (
        <div key={product.id} className="px-4">
          <Product product={product} />
        </div>
      ))}
    </div>
  ))}
</div>

      {/* <div className="flex justify-center">
      {products.map((product) => (
        <>
          <Product key={product.id} product={product} />
        </>
      ))}
    </div> */}
    </>
  );
};

export default Products;
