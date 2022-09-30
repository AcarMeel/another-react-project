import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useState } from "react";

export const ProductCard = () => {
  const [counter, setCounter] = useState(0);
  const increaseBy = (value: number) => {
    setCounter((prevValue: number) => Math.max(prevValue + value, 0));
  }
  
  return (
    <div className={styles.productCard}>
      <img src="./coffee-mug.png" alt="image" className={styles.productImg} />
      {/* <img src={noImage} alt="no image" className={styles.productImg} /> */}
      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
      </div>
    </div>
  );
};
