import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

export const CartContext = createContext("");

function App() {
  const [cart, setCart] = useState({
    items: [],
  });

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="products/:category_slug/:product_slug"
          element={<Detail />}
        />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
