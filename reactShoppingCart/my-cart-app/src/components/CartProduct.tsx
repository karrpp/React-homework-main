import QuantityController from "./QuantityController";
import styles from "../styles/Cart.module.css";

export default function CartProduct({ product, index, onUpdate }) {
  return (
    <li className={styles.productItem}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3>{product.name}</h3>
        <p>{product.cost.toLocaleString()} 원</p>
      </div>
      <QuantityController count={product.quantity} max={product.limit} onChange={(newQty) => onUpdate(index, newQty)} />
    </li>
  );
}
