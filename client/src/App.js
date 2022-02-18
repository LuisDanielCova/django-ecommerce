import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./pages/Categories";
import { CategoryDetail } from "./pages/CategoryDetail";
import { ProductDetail } from "./pages/ProductDetail";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Cart } from "./pages/Cart";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import axios from "axios";
import { UserAccount } from "./pages/UserAccount";
import { AuthProvider } from "./auth/AuthProvider";
import { Checkout } from "./pages/Checkout";

export const CartContext = createContext("");
export const TokenContext = createContext("");
export const AuthContext = createContext("");

function App() {
  const [cart, setCart] = useState({
    items: [],
  });

  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setAuthenticated(true);
    } else {
      setToken("");
      setAuthenticated(false);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <AuthContext.Provider value={{ authenticated }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="signin/" element={<LogIn />} />
            <Route exact path="signup/" element={<SignUp />} />
            <Route element={<AuthProvider />}>
              <Route exact path="account/" element={<UserAccount />} />
              <Route exact path="checkout/" element={<Checkout />} />
            </Route>
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
            <Route exact path="search/" element={<Search />} />
            <Route exact path="cart/" element={<Cart />} />
          </Routes>
        </AuthContext.Provider>
      </CartContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
