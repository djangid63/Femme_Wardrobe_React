import React from "react";
import HomePage from "./Pages/HomePage.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx"
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
