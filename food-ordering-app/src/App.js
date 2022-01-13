import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  }

  const closeCart = () => {
    setIsCartOpen(false);
  }

  return (
    <>
      {isCartOpen && <Cart closeCart={closeCart}/>}
      <Header openCart={openCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
