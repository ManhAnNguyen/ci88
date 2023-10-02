import React, { useContext } from "react";
import "./styles.css";
import { ThemeContext } from "../../App";
import Switch from "../Switch";

const Header = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);

  return (
    <div id="header">
      <h1 className="text">LOGO</h1>
      <Switch />
    </div>
  );
};

export default Header;
