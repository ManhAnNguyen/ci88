import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const ProductDetail = () => {
  const params = useParams();
  const [productDetail, setProductDetail] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    const getDetail = async () => {
      setProductDetail((prev) => ({ ...prev, isLoading: true }));
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${params.productId}`
      );

      setProductDetail({ data, isLoading: false });
    };

    getDetail();
  }, []);

  const { data, isLoading } = productDetail;

  if (isLoading) {
    return (
      <div className="loading">
        <BeatLoader color="black" />
      </div>
    );
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} />
    </div>
  );
};

export default ProductDetail;
