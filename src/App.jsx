import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const onChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // useEffect(() => {
  //   document.body.classList.add(theme)
  // },[theme])
  return (
    <ThemeContext.Provider
      value={{
        theme,
        onChangeTheme,
      }}
    >
      <div className={`container ${theme}`}>
        <Header />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
