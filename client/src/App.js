import { Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="products/:category_slug/:product_slug"
        element={<Detail />}
      />
    </Routes>
  );
}

export default App;
