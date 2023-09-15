import React from "react";
import Input from "./Input";

const Sidebar = ({ background, width = "500px", height = "500px" }) => {
  return (
    <div
      style={{
        background,
        width,
        height,
      }}
    ></div>
  );
};

export default Sidebar;
