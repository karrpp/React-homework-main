import { useState } from "react";
import { DEFAULT_PRODUCTS, Product } from "../data/products";
import CartProduct from "./CartProduct";
import TotalPriceDisplay from "./TotalPriceDisplay";
import styles from "../styles/Cart.module.css";

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);

  const updateProductQuantity = (index: number, newQuantity: number) => {
    setProducts((prevItems) => prevItems.map((product, i) => (i === index ? { ...product, quantity: newQuantity } : product)));
  };

  const totalCost = products.reduce((sum, product) => sum + product.cost * product.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>장바구니</h2>
      <ul className={styles.productList}>
        {products.map((product, idx) => (
          <CartProduct key={product.id} index={idx} product={product} onUpdate={updateProductQuantity} />
        ))}
      </ul>
      <TotalPriceDisplay total={totalCost} />
    </div>
  );
}
