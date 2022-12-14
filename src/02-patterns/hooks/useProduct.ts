import { useEffect, useRef, useState } from "react";
import { IUseProductArgs } from "../interfaces/product.interface";

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: IUseProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({
        count: value,
        product,
      });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter((prevValue: number) => Math.max(prevValue + value, 0));
    onChange &&
      onChange({
        count: newValue,
        product,
      });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
