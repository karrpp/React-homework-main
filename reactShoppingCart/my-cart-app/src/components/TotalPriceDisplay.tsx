import styles from "../styles/Cart.module.css";

export default function TotalPriceDisplay({ total }) {
  return <p className={styles.totalPrice}>총 가격: {total.toLocaleString()} 원</p>;
}
