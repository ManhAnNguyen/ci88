import { useState } from "react";

function useCount(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue);
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const onDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const onReset = () => {
    setCount(defaultValue);
  };

  return { count, onDecrease, onIncrease, onReset };
}

export default useCount;
