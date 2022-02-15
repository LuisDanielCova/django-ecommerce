import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ProductDetail } from "./components/products/ProductDetail";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="container m-5">
        <ProductDetail></ProductDetail>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
