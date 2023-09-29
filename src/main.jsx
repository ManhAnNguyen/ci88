import React from "react";
import ReactDOM from "react-dom/client";
import ConditionalRendering from "./ConditionalRendering.jsx";
import App from "./App.jsx";
import TrafficLight from "./TrafficLight.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>
);
