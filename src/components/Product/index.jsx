import { Button } from "antd";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const {
    image,
    title,
    description,
    rating: { rate },
    price,
  } = item;
  return (
    <div className="product-item">
      <img src={image} />
      <h2 className="name">{title}</h2>
      <p className="description">{description}</p>
      <div className="rating">
        {Array.from(Array(Math.ceil(rate)).keys()).map((star) => (
          <AiFillStar color="gold" size={20} key={star} />
        ))}
      </div>
      <div className="item-bottom">
        <p className="price">${price}</p>
        <Link className="view-details" to={`/product/${item.id}`}>
          View details
        </Link>
      </div>
    </div>
  );
};

export default Product;
