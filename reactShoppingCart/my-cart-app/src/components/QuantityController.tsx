import styles from "../styles/Cart.module.css";

export default function QuantityController({ count, max, onChange }) {
  return (
    <div className={styles.quantityControls}>
      <button type="button" onClick={() => onChange(count - 1)} disabled={count === 1} aria-label="감소 버튼">
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => onChange(count + 1)} disabled={count === max} aria-label="증가 버튼">
        +
      </button>
    </div>
  );
}
