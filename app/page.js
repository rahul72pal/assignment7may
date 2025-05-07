"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 w-full">
      {/* heading section  */}
      <div className="w-full mt-10 hidden sm:flex flex-col">
        <h1 className="font-normal text-4xl leading-normal tracking-wide text-center uppercase">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="font-simplon norm font-normal text-[16px] leading-[40px] tracking-normal text-center w-[40%] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] mx-auto">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-2"
            />
            <h2 className="text-lg font-semibold line-clamp-2">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
