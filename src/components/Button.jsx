import React from "react";

const Button = ({ background, width, height, color, text }) => {
  return (
    <button
      style={{
        background,
        width,
        height,
        color,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
