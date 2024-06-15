"use client";
import React, { useState } from "react";
import ProductDetails from "./details";

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  const [focusPic, setFocusPic] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <section className="py-10 lg:py-28 relative ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className=" flex flex-col items-center w-full">
            <img
              src={`/images/image-product-${focusPic}-thumbnail.jpg`}
              alt="Fall Limited Edition Sneakers"
              className="w-full rounded-md mb-4"
            />
            <div
              className="thumbnails flex justify-between mx-4 mt-4 mb-8 sm:flex-col sm:m-0 sm:gap-4 sm:mt-8 lg:flex-row lg:gap-8 lg:mt-6"
              id="product-1"
            >
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  onClick={() => setFocusPic(index + 1)}
                  key={index + 1}
                  id={`${index + 1}`}
                  className="w-1/5 cursor-pointer rounded-xl ring-active"
                >
                  <img
                    src={`/images/image-product-${index + 1}-thumbnail.jpg`}
                    alt="thumbnail"
                    className="rounded-xl hover:opacity-50 transition"
                  />
                </div>
              ))}
            </div>
          </div>
          <ProductDetails
            increment={increment}
            decrement={decrement}
            quantity={quantity}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
