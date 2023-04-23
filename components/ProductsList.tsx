import Link from "next/link";
import React from "react";
import Product from "./Product";

const ProductsList = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <Link href="/products">Top Products</Link>
          </h1>
          <div className="flex justify-center">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
