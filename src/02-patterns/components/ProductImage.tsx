import { useContext } from "react";
import { ProductCtx } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ image = "" }) => {
  const { product } = useContext(ProductCtx);
  const imageToShow = image || product?.image || noImage;
  return <img src={imageToShow} alt="product" className={styles.productImg} />;
};
