import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { IProduct } from "../interfaces/product.interface";

interface Props {
    product: IProduct
}

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();
  
  return (
    <div className={styles.productCard}>
      <img src={product.image || noImage} alt="product image" className={styles.productImg} />
      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
      </div>
    </div>
  );
};
