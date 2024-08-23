import { Link } from "react-router-dom";

import styles from "./CartItem.module.scss";
import { CartItemProps } from "../../types";
import Counter from "../counter/Counter";
import { useAppDispatch } from "../../store/store";
import { updateCart } from "../../store/slices/cartSlice.ts";

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(
      updateCart({
        productId: data.id,
        quantityChange: -data.quantity,
      })
    );
  };
  return (
    <li
      className={`${styles.card} ${data.quantity === 0 ? styles.deleted : ""}`}
    >
      <div className={styles.left}>
        <picture>
          <source srcSet={data.thumbnail} type="image/avif" />
          <source srcSet={data.thumbnail} type="image/webp" />
          <img src={data.thumbnail} alt={data.title} />
        </picture>
        <div className={styles.info}>
          <Link
            className={styles.link}
            to={`/product/${data.id}`}
            aria-label={`view details of ${data.title}`}
          >
            {data.title}
          </Link>
          <span>
            ${((data.price * (100 - data.discountPercentage)) / 100).toFixed(2)}
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <Counter id={data.id} />
        {data.quantity !== 0 && (
          <button
            className={styles.delete}
            aria-label={`delete ${data.title} from cart`}
            onClick={handleDeleteItem}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default CartItem;
