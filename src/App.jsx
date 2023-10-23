import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Something from "./components/Something";
import useBoolean from "./hooks/useBoolean";
import { Button } from "antd";
import Header from "./components/Header";

export const ThemeContext = createContext({ currentTheme: "light" });

const App = () => {
  const { value, toggle } = useBoolean(true);
  return (
    <>
      <Header></Header>
    </>
  );
};

export default App;
