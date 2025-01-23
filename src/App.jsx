import React from "react";
import HomePage from "./Pages/HomePage.jsx";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import PowerSuitDetail from "./Pages/PowerSuitDetail.jsx";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details" element={<PowerSuitDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
