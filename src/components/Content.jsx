import React from "react";
import Input from "./Input";

const Content = ({ children, title }) => {
  return (
    <div>
      {title}
      {children}
    </div>
  );
};

export default Content;
