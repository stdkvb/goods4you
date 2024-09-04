import { useSelector, shallowEqual } from "react-redux";
import styles from "./Counter.module.scss";
import { cartIcon, minusIcon, plusIcon } from "../../assets/icons.tsx";
import { CartState, CounterProps } from "../../types.ts";
import { useAppDispatch } from "../../store/store.ts";
import { updateCart } from "../../store/slices/cartSlice.ts";

const Counter: React.FC<CounterProps> = ({
  id,
  buttonText,
  initialQuantity = 0,
  className,
  stock,
}) => {
  const dispatch = useAppDispatch();

  const cartProduct = useSelector(
    (state: { cartSlice: CartState }) =>
      state.cartSlice.products.find((product) => product.id === id),
    shallowEqual
  );

  const quantity = cartProduct ? cartProduct.quantity : initialQuantity;

  const handleAddToCart = () => {
    dispatch(updateCart({ productId: id, quantityChange: 1 }));
  };

  const handleIncrease = () => {
    dispatch(updateCart({ productId: id, quantityChange: 1 }));
  };

  const handleDecrease = () => {
    dispatch(updateCart({ productId: id, quantityChange: -1 }));
  };

  return (
    <div
      className={`${styles.counter} ${className}`}
      role="group"
      aria-labelledby="counter-label"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {quantity > 0 ? (
        <>
          <span id="counter-label" className="hidden">
            Product counter controls
          </span>
          <div className={styles.buttons}>
            <button
              className="btn btn_icon"
              onClick={handleDecrease}
              aria-label="decrease item count"
            >
              {minusIcon}
            </button>
            <span className={styles.count}>{`${quantity} item${
              quantity > 1 ? "s" : ""
            }`}</span>
            <button
              className={`btn btn_icon ${quantity == stock && "disabled"}`}
              onClick={handleIncrease}
              aria-label="increase item count"
            >
              {plusIcon}
            </button>
          </div>
        </>
      ) : (
        <button
          className={`btn ${!buttonText && "btn_icon"} ${styles.add}`}
          onClick={handleAddToCart}
          aria-label="add to cart"
        >
          {buttonText || cartIcon}
        </button>
      )}
    </div>
  );
};

export default Counter;
