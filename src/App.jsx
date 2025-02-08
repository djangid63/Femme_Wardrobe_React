import React from "react";
import HomePage from "./Pages/HomePage.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx"
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import ShopPage from "./Pages/ShopPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
