import React, { createElement } from "react";
import "./App.css";
import Text from "./components/Text";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Content from "./components/Content";
import Input from "./components/Input";
import Shape from "./components/Shape";

const App = () => {
  return (
    <>
      <Shape />
      <Shape shape="square" width="400px" />
      <Shape shape="circle" width="400px" />
    </>
  );
};

export default App;

//shape : thay đổi được width,height,background
// shape  : "square" va 'circle'
