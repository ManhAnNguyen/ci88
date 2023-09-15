import React from "react";

const Input = ({ typeInput }) => {
  const backgroundColor = typeInput === "primary" ? "blue" : "yellow";
  return (
    <input
      style={{
        backgroundColor,
      }}
    />
  );
};

export default Input;
