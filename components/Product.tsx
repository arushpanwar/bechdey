import React from "react";
import Link from "next/link";

const dummyproduct = {
  id: 1,
  name: "Basic Tee",
  href: "/product/basic-tee",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  imageAlt: "Front of men's Basic Tee in black.",
  price: "$35",
  color: "Black",
};

const Product = ({product}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div key={product?.id} className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product?.image||dummyproduct.imageSrc}
                alt={product?.name||dummyproduct.name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link legacyBehavior href={"/product/basic-tee"}>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product?.name||dummyproduct.name}
                    </a>
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product?.color||dummyproduct.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product?.price}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Product;
