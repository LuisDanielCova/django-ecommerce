import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="container m-5">
        <p>Home</p>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
