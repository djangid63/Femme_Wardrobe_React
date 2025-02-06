import React from "react";
import HomePage from "./Pages/HomePage.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx"
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
