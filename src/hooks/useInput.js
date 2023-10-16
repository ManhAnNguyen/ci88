import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onReset = () => setValue(defaultValue);

  return { value, onChange, onReset };
}

export default useInput;
