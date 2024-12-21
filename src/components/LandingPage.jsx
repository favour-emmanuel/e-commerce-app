import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="px-5 lg:px-10 py-5 lg:py-12">
      <div className="flex justify-between">
        <div>
          <h1 className="font-extrabold md:text-5xl text-4xl text-appNavy">
            Welcome 👋 to <span className="text-appPurple">didi stores</span>
          </h1>
          <p className="text-lg my-3">
            Your home of accessories and amazing products
          </p>
          <button className="bg-appPurple text-appWhite my-3 py-3 px-3.5 rounded-lg w-full max-w-[9rem] hover:bg-[#3c38bb]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="mt-10">
        {Object.keys(groupedProducts).map((category) => (
          <div key={category} className="mb-6">
            <h2 className="text-xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {groupedProducts[category].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="py-3 lg:mt-24 mt-7 border-t border-appPurple/30">
        <div className="flex justify-between items-center my3">
          <h4 className="text-xl font-extrabold text-appPurple">
            Didi's Store
          </h4>
          <p className="text-[15.6px] font-semibold text-appNavy">
            © 2024 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
