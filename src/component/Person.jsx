import React, { useState } from "react";

const Person = () => {
  const [info, setInfo] = useState({
    name: "MindX",
  }); //cu 123

  const onClick = () => {
    // info.age = 18;

    // const newInfo = { ...info, age: 18 }; // tao ra 1 dia chi moi

    setInfo({ ...info, age: 18 }); //new 456
  };

  console.log("re-render");
  return (
    <div>
      {JSON.stringify(info)}
      <button onClick={onClick}>onClick</button>
    </div>
  );
};

export default Person;
