

export interface IProduct {
  id: string;
  title: string;
  image?: string;
}

export interface Props {
  product: IProduct;
  children: () => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

export interface IInitialValues {
  count?: number;
  maxCount?: number;
}

export interface IOnChangeArgs {
  product: IProduct;
  count: number;
}

export interface IUseProductArgs {
  product: IProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

export interface IProductCtxProps {
  increaseBy: (value: number) => void;
  counter: number;
  product: IProduct;
  maxCount?: number;
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

export interface IProductInCart extends IProduct {
  count: number;
}