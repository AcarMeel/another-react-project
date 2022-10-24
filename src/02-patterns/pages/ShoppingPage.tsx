import { ProductCard } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import {
  IProduct,
} from "../interfaces/product.interface";

import { products } from "../mock/products";

import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div className="product-list">
        {products.map((product: IProduct) => (
          <ProductCard
            className="bg-dark"
            key={product.id}
            product={product}
            style={{ backgroundColor: "#f2709c" }}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0 }
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            className="bg-dark"
            key={product.id}
            product={product}
            style={{ width: "100px", backgroundColor: ' #f2709c' }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
