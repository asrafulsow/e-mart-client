import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home/Home";
import Wishlist from "./Components/Home/Wishlist/Wishlist";
import Header from "./Components/Shared/Navbar/Header";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Contact from "./pages/contact/Contact";
import "leaflet/dist/leaflet.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
