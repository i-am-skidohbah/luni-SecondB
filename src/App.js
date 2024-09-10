import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductDetails";
import Carts from "./pages/Carts";
import Traning from "./pages/Traning";
import Contact from "./pages/Contact";
import Project from "./pages/project";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import CheckOut from "./pages/checkOut";
import Sucess from "./pages/Sucess";
const App = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/traning" element={<Traning />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/sucess" element={<Sucess />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
