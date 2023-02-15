import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<DynamicBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
