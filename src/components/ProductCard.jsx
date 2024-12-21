import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-appPurple text-white p-2 mt-4 rounded-full w-full hover:bg-appWhite hover:border duration-300 transition-all hover:text-appPurple hover:border-appPurple/25"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
