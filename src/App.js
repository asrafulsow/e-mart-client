import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Header from "./Components/Shared/Navbar/Header";
import NotFound from "./Components/Shared/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/Login/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
