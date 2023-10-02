import React, { useContext } from "react";
import "./styles.css";
import { BiSun, BiSolidMoon } from "react-icons/bi";
import { ThemeContext } from "../../App";

const Switch = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  return (
    <div
      onClick={onChangeTheme}
      id="switch-custom"
      className={`${theme === "dark" && "checked"}`}
    >
      <BiSun size={20} color="#fcc11b" className="icon" />
      <BiSolidMoon size={20} color="#fcc11b" className="icon" />
    </div>
  );
};

export default Switch;
