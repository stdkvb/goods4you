import { Link } from "react-router-dom";

import styles from "./CartItem.module.scss";
import { Product } from "../../types";
import Counter from "../counter/Counter";
import { cartIcon } from "../../assets/icons";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  return (
    <li className={styles.card}>
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
        <Counter value={data.quantity} />
        <button
          className={styles.delete}
          aria-label={`delete ${data.title} from cart`}
        >
          Delete
        </button>

        {/* <button className="btn btn_icon" aria-label="icon button">
                    {cartIcon}
                  </button> */}
      </div>
    </li>
  );
};

export default CartItem;
