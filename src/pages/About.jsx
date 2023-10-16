import { Button } from "antd";
import React, { useEffect, useState } from "react";
import useCount from "../hooks/useCount";
import useLocalStorage from "../hooks/useLocalStorage";

const About = () => {
  const { count, onDecrease, onReset, onIncrease } = useCount(
    localStorage.getItem("count")
      ? JSON.parse(localStorage.getItem("count"))
      : 0
  );

  useLocalStorage(count);

  return (
    <div>
      <h1>About page</h1>
      <h1>{count}</h1>
      <Button onClick={onIncrease}>+</Button>
      <Button onClick={onDecrease}>-</Button>
      <Button onClick={onReset}>reset</Button>
    </div>
  );
};

export default About;
