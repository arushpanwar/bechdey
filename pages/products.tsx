import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Product from "@/components/Product";

const supabaseUrl = "https://zigydihmnwehecgeokqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZ3lkaWhtbndlaGVjZ2Vva3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNTU5MzcsImV4cCI6MTk5NzgzMTkzN30.X5tDt3Pk0dk_TPHzr3us_lqHDJuRZ6YpT0zMAeIIfTE";

const supabase = createClient(supabaseUrl, supabaseKey);

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
    <div className="flex justify-center">
      {products.map((product) => (
        <>
          <Product key={product.id} product={product} />
        </>
      ))}
    </div>
  );
};

export default Products;
