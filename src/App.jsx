import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RentedHistory from "./pages/RentedHistory";
import Signup from "./pages/Signup";
import NavBar from "./components/Nav/NavBar";
import Inventory from "./pages/Inventory";
import AddCar from "./pages/AddCar";
import AllCars from "./pages/AllCars";
import Orders from "./pages/Orders";
import { Toaster } from "react-hot-toast";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "true");
  useEffect(() => {
    setDark(localStorage.getItem("theme") === "true");
  }, []);

  return (
    <div className="min-h-screen" data-theme={dark ? "dark" : "light"}>
      <BrowserRouter>
        <NavBar dark={dark} setDark={setDark} />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/history" element={<RentedHistory />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
