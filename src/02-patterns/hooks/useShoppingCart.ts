import { useState } from "react";
import { IOnChangeArgs, IProductInCart } from "../interfaces/product.interface";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: IOnChangeArgs) => {
    setShoppingCart((prev) => {
      const productInCart: IProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }
      const { [product.id]: toDelete, ...rest } = prev;
      return { ...rest };

      //   if (count === 0) {
      //     const { [product.id]: toDelete, ...rest } = prev;
      //     return rest;
      //   }
      //   const result = {
      //     ...prev,
      //     [product.id]: {
      //       ...product,
      //       count,
      //     },
      //   };
      //   return result;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
