import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <Link to="/checkout" className="fixed bottom-4 right-4">
      <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg relative">
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-1 rounded-full">
          {cart.length}
        </span>
        🛒
      </div>
    </Link>
  );
};

export default CartIcon;
