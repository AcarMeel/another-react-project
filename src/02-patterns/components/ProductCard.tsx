import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { IProductCtxProps, Props } from "../interfaces/product.interface";
import { createContext } from "react";

export const ProductCtx = createContext({} as IProductCtxProps);
const { Provider } = ProductCtx;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues });
  
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`}
      style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};
