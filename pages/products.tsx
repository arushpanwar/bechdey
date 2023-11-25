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
      const { data, error }: any = await supabase.from("products").select("*");

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
        {products
          .reduce((rows: any, product: any, index: any) => {
            if (index % 4 === 0) rows.push([]);
            rows[rows.length - 1].push(product);
            return rows;
          }, [])
          .map((row: any, index: number) => (
            <div key={index} className="flex justify-center">
              {row.map((product: any) => (
                <div key={product.id} className="px-4">
                  <Product product={product} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
