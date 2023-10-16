import { useState } from "react";

function useBoolean(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = () => setValue((prev) => !prev);
  const onSetTrue = () => setValue(true);
  const onSetFalse = () => setValue(false);
  const onReset = () => setValue(!!defaultValue);
  const onSetValue = (_value) => setValue(_value);

  return { value, toggle, onSetTrue, onSetFalse, onReset, onSetValue };
}

export default useBoolean;
