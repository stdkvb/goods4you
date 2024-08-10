import { Link } from "react-router-dom";

import styles from "./CartItem.module.scss";
import { catalogItem } from "../../types";
import Counter from "../counter/Counter";
import { cartIcon } from "../../assets/icons";

interface CartItemProps {
  data: catalogItem;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  console.log(data);
  return (
    <li className={`${styles.card} ${styles[data.variant]}`}>
      <div className={styles.left}>
        <img src={data.imageUrl} />
        <div className={styles.info}>
          <Link className={styles.link} to={`/product/${data.id}`}>
            {data.name}
          </Link>
          <span>${data.price}</span>
        </div>
      </div>
      <div className={styles.right}>
        {data.variant == "deleted" ? (
          <button className="btn btn_icon">{cartIcon}</button>
        ) : (
          <>
            <Counter value={data.count} />
            <span className={styles.delete}>Delete</span>
          </>
        )}
      </div>
    </li>
  );
};

export default CartItem;
