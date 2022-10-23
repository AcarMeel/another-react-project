import { ProductCtx } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ITitleProps } from "../interfaces/product.interface";

export const ProductTitle = ({ title, className }: ITitleProps) => {
  const { product } = useContext(ProductCtx);
  return (
    <span className={`${styles.productDescription} ${className}`}>{title || product?.title}</span>
  );
};
