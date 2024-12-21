import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <Link to="/checkout" className="fixed bottom-4 right-4">
      <div className="bg-appPurple text-white p-4 rounded-full shadow-lg relative">
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-1 rounded-full">
          {cart.length}
        </span>
        <Icon icon="fa6-solid:cart-shopping" className="text-lg" />
      </div>
    </Link>
  );
};

export default CartIcon;
