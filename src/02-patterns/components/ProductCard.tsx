import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { IProductCtxProps, Props } from "../interfaces/product.interface";
import { createContext } from "react";
import { ProductImage, ProductTitle, ProductButtons } from "./";

export const ProductCtx = createContext({} as IProductCtxProps);
const { Provider } = ProductCtx;

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};
