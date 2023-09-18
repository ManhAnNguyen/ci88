import React, { useState } from "react";

const Husband = () => {
  const [husbands, setHusbands] = useState([]);

  const onCLick = () => {
    // husbands.push(husbands.length + 1);
    // const newHusbands = [...husbands, husbands.length + 1];
    setHusbands([...husbands, husbands.length + 1]);
  };

  console.log("husband re-render");
  return (
    <div>
      {JSON.stringify(husbands)}
      <button onClick={onCLick}>onClick</button>
    </div>
  );
};

export default Husband;
