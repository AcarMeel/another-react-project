import { useContext } from "react";
import { ProductCtx } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { IImageProps } from "../interfaces/product.interface";

export const ProductImage = ({ image = "", className }: IImageProps) => {
  const { product } = useContext(ProductCtx);
  const imageToShow = image || product?.image || noImage;
  return <img src={imageToShow} alt="product" className={`${styles.productImg} ${className}`} />;
};
