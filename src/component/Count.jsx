import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  console.log("count-render");
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={onClick}>CLICK</button>
    </div>
  );
};

export default Count;
