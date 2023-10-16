import { useEffect } from "react";

function useLocalStorage(value) {
  useEffect(() => {
    if (value !== null && value !== undefined) {
      localStorage.setItem("count", JSON.stringify(value));
    }
  }, [value]);
}

export default useLocalStorage;
