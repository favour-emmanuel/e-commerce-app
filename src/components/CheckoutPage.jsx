import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Receipt from "./Receipt";

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isPaid, setIsPaid] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handlePayment = () => {
    setIsPaid(true); // Simulate payment
    // You can also clear the cart after payment by calling clearCart()
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Checkout</h1>
      {isPaid ? (
        <Receipt /> // Display the receipt once paid
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xl font-bold">Total: ${total}</div>
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white p-3 rounded-full w-full mt-4 hover:bg-green-600"
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
