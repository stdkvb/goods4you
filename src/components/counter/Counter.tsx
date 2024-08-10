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
    <div className={styles.counter}>
      {value ? (
        <>
          <button
            className="btn btn_icon"
            onClick={handleClick}
            aria-label="add to cart"
          >
            {minusIcon}
          </button>
          <span className={styles.count}>{`${value} item${
            value > 1 ? "s" : ""
          }`}</span>
          <button
            className="btn btn_icon"
            onClick={handleClick}
            aria-label="add to cart"
          >
            {plusIcon}
          </button>
        </>
      ) : (
        <button
          className="btn btn_icon"
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
