import React from "react";
import "./App.css";
import { NumericFormat } from "react-number-format";
import { Button, Input } from "antd";
const TrafficLight = () => {
  return (
    <div className="traffic-light">
      <div className="count">
        {" "}
        <NumericFormat
          customInput={Input}
          style={{
            width: "300px",
          }}
        />
        <Button
          type="primary"
          size="middle"
          style={{
            marginLeft: "10px",
          }}
        >
          click
        </Button>
      </div>
      <div className="lights">
        <div className="light red"></div>
        <div className="light yellow"></div>
        <div className="light green"></div>
      </div>
    </div>
  );
};

export default TrafficLight;
