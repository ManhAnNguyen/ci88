import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import products from "./data/products.json";

export const ProductContext = createContext(null);

const App = () => {
  return (
    <ProductContext.Provider value={{ products }}>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
};

export default App;
