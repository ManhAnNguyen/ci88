import React from "react";

const App = () => {
  const onClick = () => {
    const value = prompt("Enter name");

    console.log(value);
  };
  return (
    <div>
      'A,B'
      <button onClick={onClick}>Add</button>
      <button onClick={onClick}>rest</button>
    </div>
  );
};

export default App;
