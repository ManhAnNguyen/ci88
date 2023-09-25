import React from "react";
import "./App.css";
import data from "./data.json";
import ProductCard from "./components/ProductCard";

console.log(data);

const App = () => {
  return (
    <div className="product-container">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default App;
