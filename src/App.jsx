import React from "react";
import HomePage from "./Pages/HomePage.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx"
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import ShopPage from "./Pages/ShopPage.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import CartHome from "./Pages/CartHome.jsx";
import CheckOutHome from "./Pages/CheckOutHome.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cartHome/:id/:count/:selectedSize/" element={<CartHome />} />
        <Route path="/checkout" element={<CheckOutHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
