import { useContext, useCallback } from "react";
import { ProductCtx } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { IProductButtons } from "../interfaces/product.interface";

export const ProductButtons = ({ className, style }: IProductButtons) => {
  const { counter, increaseBy, maxCount } = useContext(ProductCtx);
  const isMaxCountReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  );
  
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button disabled={!!isMaxCountReached()} onClick={() => increaseBy(1)} className={`${styles.buttonAdd} ${isMaxCountReached() ? styles.disabled : ''}`}>
        +
      </button>
    </div>
  );
};
