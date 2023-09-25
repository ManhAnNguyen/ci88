import React from "react";
import "./styles.css";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ item }) => {
  const { image, title, category, price, rating } = item;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-content">
        <p className="name">{title}</p>
        <span className="star">
          {Array.from(Array(Math.ceil(rating.rate)).keys()).map((star) => (
            <AiFillStar key={star} color="yellow" />
          ))}
        </span>
      </div>
      <div className="product-price"></div>
    </div>
  );
};

export default ProductCard;
