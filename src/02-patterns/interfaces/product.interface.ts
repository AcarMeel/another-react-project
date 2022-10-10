import { ReactElement } from "react";

export interface IProduct {
  id: string;
  title: string;
  image?: string;
}

export interface Props {
  product: IProduct;
  children?: ReactElement | Array<ReactElement>;
}

export interface IProductCtxProps {
  increaseBy: (value: number) => void;
  counter: number;
  product: IProduct;
}
