import { ProductCard } from "../components";

import { products } from "../mock/products";

import "../styles/custom-styles.css";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div className="product-list">
        <ProductCard
          className="bg-dark"
          key={product.id}
          product={product}
          style={{ backgroundColor: "#f2709c" }}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {
            ({ reset }) => (
                <>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white" />
                    <ProductCard.Buttons className="custom-buttons" />
                    <button onClick={reset}>Reset</button>
                </>
            )
          }
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
