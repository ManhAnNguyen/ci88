import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import "./AppRouter.css";
import NavLinks from "./components/Navlinks";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

// condition ? <Home /> : <Products/>
