import { useEffect, useState } from "react";
import NavBar from "./components/Nav/NavBar";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RentedHistory from "./pages/RentedHistory";
import Inventory from "./pages/Inventory";
import AllCars from "./pages/AllCars";
import AddCar from "./pages/AddCar";
import Orders from "./pages/Orders";
import EditCar from "./pages/EditCar";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "true");
  useEffect(() => {
    setDark(localStorage.getItem("theme") === "true");
  }, []);
  const location = useLocation();

  return (
    <div className="min-h-screen" data-theme={dark ? "dark" : "light"}>
      <NavBar dark={dark} setDark={setDark} />
      <Toaster />
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/history" element={<RentedHistory />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/edit/:id" element={<EditCar />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
