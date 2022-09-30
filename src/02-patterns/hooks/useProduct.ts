import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);
  const increaseBy = (value: number) => {
    setCounter((prevValue: number) => Math.max(prevValue + value, 0));
  };

  return {
    counter,
    increaseBy
  }
};
