import styles from "./Counter.module.scss";
import { cartIcon, minusIcon, plusIcon } from "../../assets/icons.tsx";

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className={styles.counter}
      role="group"
      aria-labelledby="counter-label"
    >
      {value ? (
        <>
          <span id="counter-label" className="hidden">
            Product counter controls
          </span>
          <div className={styles.buttons}>
            <button
              className="btn btn_icon"
              onClick={handleClick}
              aria-label="decrease item count"
            >
              {minusIcon}
            </button>
            <span className={styles.count}>{`${value} item${
              value > 1 ? "s" : ""
            }`}</span>
            <button
              className="btn btn_icon"
              onClick={handleClick}
              aria-label="increase item count"
            >
              {plusIcon}
            </button>
          </div>
        </>
      ) : (
        <button
          className={`btn btn_icon ${styles.add}`}
          onClick={handleClick}
          aria-label="add to cart"
        >
          {cartIcon}
        </button>
      )}
    </div>
  );
};

export default Counter;
