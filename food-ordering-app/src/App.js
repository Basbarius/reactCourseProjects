import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  }

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  }

  const closeCart = () => {
    setIsCartOpen(false);
  }

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  }

  return (
    <CartProvider>
      {isCheckoutOpen && <Checkout closeCheckout={closeCheckout}/>}
      {isCartOpen && <Cart closeCart={closeCart} openCheckout={openCheckout}/>}
      <Header openCart={openCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
