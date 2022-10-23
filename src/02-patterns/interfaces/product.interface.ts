import { ReactElement } from "react";

export interface IProduct {
  id: string;
  title: string;
  image?: string;
}

export interface Props {
  product: IProduct;
  children?: ReactElement | Array<ReactElement>;
  className?: string;
  style?: React.CSSProperties;
}

export interface IProductCtxProps {
  increaseBy: (value: number) => void;
  counter: number;
  product: IProduct;
}

export interface ITitleProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface IImageProps {
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface IProductButtons {
  className?: string;
  style?: React.CSSProperties;
}