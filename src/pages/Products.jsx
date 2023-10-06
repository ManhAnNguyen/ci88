import React from "react";
import NavLinks from "../components/Navlinks";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(Object.fromEntries(new URLSearchParams(window.location.search)));
  return (
    <div>
      <button
        onClick={() => setSearchParams({ price: "max", beautiful: "dep" })}
      >
        san pham dat tien nhat
      </button>
      <div className="item">
        <img
          src="https://media.vov.vn/sites/default/files/styles/front_large/public/2023-08/1_27.jpg"
          style={{
            width: "300px",
          }}
        />
        <p>10.000</p>
        <Link to={"/products/10"}>go to detail</Link>
      </div>
      <div className="item">
        <img
          src="https://media.vneconomy.vn/images/upload/2023/09/13/apple-iphone-15-pro-lineup-color-lineup-geo-230912-big-large-2x.jpg"
          style={{
            width: "300px",
          }}
        />
        <p>10.000</p>
        <Link to={"/products/1"}>go to detail</Link>
      </div>
      <div className="item">
        <img
          src="https://media.vov.vn/sites/default/files/styles/front_large/public/2023-08/1_27.jpg"
          style={{
            width: "300px",
          }}
        />
        <p>10.000</p>
        <Link to={"/products/2"}>go to detail</Link>
      </div>
      <div className="item">
        <img
          src="https://media.vov.vn/sites/default/files/styles/front_large/public/2023-08/1_27.jpg"
          style={{
            width: "300px",
          }}
        />
        <p>10.000</p>
        <Link to={"/products/3"}>go to detail</Link>
      </div>
    </div>
  );
};

export default Products;
