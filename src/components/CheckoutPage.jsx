import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Receipt from "./Receipt";
import { Icon } from "@iconify/react/dist/iconify.js";

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isPaid, setIsPaid] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handlePayment = () => {
    setIsPaid(true);
  };

  return (
    <div className="py-5">
      <h1 className="md:text-4xl text-4xl font-extrabold mb-4 text-appNavy">
        Ready to buy ? Checkout
      </h1>
      {isPaid ? (
        <Receipt />
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="text-lg text-appNavy font-bold">
                    {item.title}
                  </h3>
                  <p className="text-base text-appNavy/70">{item.category}</p>
                  <p className="text-sm font-semibold text-appPurple">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-appPurple text-white p-2 rounded-full hover:bg-blue-600"
                  >
                    <Icon icon="icon-park-outline:plus" className="text-base" />
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-appPurple text-white p-2 rounded-full hover:bg-blue-600"
                  >
                    <Icon icon="cuida:minus-outline" className="text-base" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    <Icon
                      icon="fluent:delete-48-regular"
                      className="text-base"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xl font-bold text-appPurple">
            Total: ${total}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handlePayment}
              className="bg-appPurple text-white p-3 rounded-full w-full max-w-[30rem]  mt-4 hover:bg-appWhite hover:text-appPurple"
            >
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
