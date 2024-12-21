import React from "react";
import { useCart } from "../context/CartContext";

const Receipt = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="p-4 border border-appPurple/45 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-appPurple">Receipt</h2>
      <div className="space-y-4 my-3">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">
                {item.quantity} x ${item.price}
              </span>
              <span className="text-sm font-bold">
                ${item.quantity * item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-lg font-semibold">
          <span className="font-bold text-xl">Total:</span>
          <span className="font-bold text-xl">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
