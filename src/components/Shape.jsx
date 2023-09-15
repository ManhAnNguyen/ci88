import React from "react";

const Shape = ({ shape, width }) => {
  return (
    <div
      //   className={shape}
      style={{
        background: "red",
        margin: "50px",
        width,
        aspectRatio: shape === "square" || shape === "circle" ? "1" : "unset",
        borderRadius: shape === "circle" ? "50%" : "unset",
      }}
    >
      Shape
    </div>
  );
};

export default Shape;
