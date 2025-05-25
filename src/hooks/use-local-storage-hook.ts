import { useState, useEffect } from "react";

const useLocalStorageHook = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      currentValue = defaultValue;
      console.error(`Error writing key ${key} on localStorage:`, e)
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorageHook;
