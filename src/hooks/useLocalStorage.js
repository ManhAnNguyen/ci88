import { useEffect } from "react";

function useLocalStorage(key, value) {
  useEffect(() => {
    if (value !== null && value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);
}

export default useLocalStorage;
