import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BootStrap from "./BootStrap.jsx";
import ReactDnd from "./ReactDnd.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactDnd />
  </React.StrictMode>
);
