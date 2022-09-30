import { ProductCard } from "../components/ProductCard";
import { IProduct } from "../interfaces/product.interface";

import { products } from "../mock/products";

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div className="product-list">
        { products.map((product: IProduct) => (
            <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
