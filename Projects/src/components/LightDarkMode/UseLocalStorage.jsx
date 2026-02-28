import { useEffect, useState } from "react";

export const UseLocalStorage = (key, defaultValue) => {
  const initValue = () => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue),
      );
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }

    return currentValue;
  };

  const [value, setValue] = useState(initValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
