import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { NewProductsList } from "./components/products/NewProductsList";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="container m-5">
        <p>Home</p>
        <NewProductsList></NewProductsList>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
