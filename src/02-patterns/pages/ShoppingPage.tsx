import { ProductCard } from "../components";
import { IProduct } from "../interfaces/product.interface";

import { products } from "../mock/products";

import '../styles/custom-styles.css';

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div className="product-list">
        {products.map((product: IProduct) => (
          <ProductCard className="bg-dark" key={product.id} product={product}>
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white"/>
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
