import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./pages/Categories";
import { CategoryDetail } from "./pages/CategoryDetail";
import { ProductDetail } from "./pages/ProductDetail";
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
          element={<ProductDetail />}
        />
        <Route exact path="categories/" element={<Categories />} />
        <Route
          exact
          path="categories/:category_slug/"
          element={<CategoryDetail />}
        />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
