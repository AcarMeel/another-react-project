import { ProductCtx } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { useContext } from "react";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductCtx);
  return (
    <span className={styles.productDescription}>{title || product?.title}</span>
  );
};
