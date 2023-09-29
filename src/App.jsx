import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Input, InputNumber } from "antd";
import { NumericFormat } from "react-number-format";

const App = () => {
  const [start, setStart] = useState(false);
  const [value, setValue] = useState("");

  const [ani, setAni] = useState(false);

  useEffect(() => {
    //check if end
    if (value === 0) {
      alert("Ended");
      return;
    }

    //check initalize
    if (!start || value === "") return;
    const timer = setInterval(() => {
      setValue(value - 1);
      setAni((prev) => !prev);
    }, 1000);

    //clean up function
    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <div>
      <NumericFormat
        value={value}
        customInput={Input}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "300px",
        }}
      />
      <Button
        type="primary"
        size="middle"
        onClick={() => setStart(true)}
        style={{
          marginLeft: "10px",
        }}
      >
        click
      </Button>
      <h1 id="count" className={`${ani && "ani"}`}>
        {value}
      </h1>
    </div>
  );
};

export default App;
