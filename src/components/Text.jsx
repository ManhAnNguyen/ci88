import React from "react";

const Text = ({ color, text }) => {
  return (
    <h1
      style={{
        fontStyle: "italic",
        color,
      }}
    >
      {text}
    </h1>
  );
};

export default Text;
