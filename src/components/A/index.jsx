import React, { useState } from "react";

const A = ({ count, setCount }) => {
  return (
    <div>
      A{count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default A;
