import { useSelector, shallowEqual } from "react-redux";
import styles from "./Counter.module.scss";
import { cartIcon, minusIcon, plusIcon } from "../../assets/icons.tsx";
import { CartState } from "../../types.ts";

interface CounterProps {
  id: number;
  buttonText?: string;
}

const Counter: React.FC<CounterProps> = ({ id, buttonText }) => {
  const cartProduct = useSelector(
    (state: { cart: CartState }) =>
      state.cart.products.find((product) => product.id === id),
    shallowEqual
  );

  const quantity = cartProduct ? cartProduct.quantity : 0;

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
      {quantity > 0 ? (
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
            <span className={styles.count}>{`${quantity} item${
              quantity > 1 ? "s" : ""
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
          className={`btn ${!buttonText && "btn_icon"} ${styles.add}`}
          onClick={handleClick}
          aria-label="add to cart"
        >
          {buttonText || cartIcon}
        </button>
      )}
    </div>
  );
};

export default Counter;
