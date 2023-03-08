import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home/Home";
import Wishlist from "./Components/Home/Wishlist/Wishlist";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Header from "./Components/Shared/Navbar/Header";
import NotFound from "./Components/Shared/NotFound/NotFound";
import ShopPage from "./Components/ShopPage/ShopPage";
import Contact from "./pages/contact/Contact";
import "leaflet/dist/leaflet.css";
import DynamicBlog from "./pages/DynamicBlog/DynamicBlog";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ShopingCart from "./Components/ShopingCart/ShopingCart";
import CheckoutProduct from "./Components/CheckoutProduct/CheckoutProduct";
import ProductDetail from "./Components/Home/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:singleProduct" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<DynamicBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/viewCart" element={<ShopingCart />} />
          <Route path="/checkout" element={<CheckoutProduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
