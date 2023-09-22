import React from "react";
import "./styles.css";
const Button = ({ text, onClick, backgroundColor = "aquamarine" }) => {
  return (
    <button
      style={{
        backgroundColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
