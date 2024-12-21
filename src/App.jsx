import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import LandingPage from "./components/LandingPage";
import CheckoutPage from "./components/CheckoutPage";
import CartIcon from "./components/CartIcon";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <CartIcon /> {/* Cart Icon component */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
