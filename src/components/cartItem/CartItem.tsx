import { Link } from "react-router-dom";

import styles from "./CartItem.module.scss";
import { catalogItem } from "../../types";
import Counter from "../counter/Counter";
import { cartIcon } from "../../assets/icons";

interface CartItemProps {
  data: catalogItem;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  return (
    <li className={`${styles.card} ${styles[data.variant]}`}>
      <div className={styles.left}>
        <picture>
          <source srcSet={data.imageUrlAvif} type="image/avif" />
          <source srcSet={data.imageUrlWebp} type="image/webp" />
          <img src={data.imageUrlPng} alt={data.name} />
        </picture>
        <div className={styles.info}>
          <Link
            className={styles.link}
            to={`/product/${data.id}`}
            aria-label={`view details of ${data.name}`}
          >
            {data.name}
          </Link>
          <span>${data.price}</span>
        </div>
      </div>
      <div className={styles.right}>
        {data.variant == "deleted" ? (
          <button className="btn btn_icon" aria-label="icon button">
            {cartIcon}
          </button>
        ) : (
          <>
            <Counter value={data.count} />
            <button
              className={styles.delete}
              aria-label={`delete ${data.name} from cart`}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default CartItem;
