import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { ProductContext } from "../App";

const ProductDetail = () => {
  const params = useParams();
  const value = useContext(ProductContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const detailProduct = value?.products?.find(
      (item) => item.id === +params.productId
    );
    setData(detailProduct);
  }, [value, params]);
  // const [productDetail, setProductDetail] = useState({
  //   data: null,
  //   isLoading: true,
  // });

  // useEffect(() => {
  //   const getDetail = async () => {
  //     setProductDetail((prev) => ({ ...prev, isLoading: true }));
  //     const { data } = await axios.get(
  //       `https://fakestoreapi.com/products/${params.productId}`
  //     );

  //     setProductDetail({ data, isLoading: false });
  //   };

  //   getDetail();
  // }, []);

  // const { data, isLoading } = productDetail;

  // if (isLoading) {
  //   return (
  //     <div className="loading">
  //       <BeatLoader color="black" />
  //     </div>
  //   );
  // }

  if (!data) return <></>;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} />
    </div>
  );
};

export default ProductDetail;
