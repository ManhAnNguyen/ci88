import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { BeatLoader } from "react-spinners";

const Products = () => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(() => ({ data: _data, isLoading: false }));
    })();
  }, []);

  const { data, isLoading } = products;

  if (isLoading) {
    return (
      <div className="loading">
        <BeatLoader color="black" />
      </div>
    );
  }

  return (
    <div className="product-list">
      {data?.map((item, index) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
