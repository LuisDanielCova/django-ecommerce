import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./pages/Categories";
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
    // eslint-disable-next-line
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
        <Route exact path="categories/" element={<Categories />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
