import React, { useEffect, useState } from "react";

//life circle

//mount
//componentDidmount

//updation
//componentDidupdate

//unmount
//componentwillUnmount

const A = () => {
  const [value, setInput] = useState("");

  useEffect(() => {
    console.log("component running");

    return () => console.log("componentwillUnmount");
  }, [value]);

  return (
    <div
      style={{
        background: "red",
      }}
      className="a"
    >
      A
      <input value={value} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default A;
