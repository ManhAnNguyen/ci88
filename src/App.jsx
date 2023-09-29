import React, { useState } from "react";
import "./App.css";
import A from "./components/A";
import B from "./components/B";

const App = () => {
  const [switched, setSwitched] = useState(true);

  const onClick = () => {
    setSwitched(!switched);
  };

  return (
    <div>
      {switched && <A />}
      <button onClick={onClick}>click</button>
    </div>
  );
};

export default App;
