import { Link } from "react-router-dom";

import styles from "./ItemCard.module.scss";
import { catalogItem } from "../../types.ts";
import Counter from "../counter/Counter.tsx";

interface ItemCardProps {
  data: catalogItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
  return (
    <li className={styles.card}>
      <Link to={`product/${data.id}`} className={styles.wrapper}>
        <div className={styles.image}>
          <div className={styles.background}>
            <span>Show details</span>
          </div>
          <img src={data.imageUrl} />
        </div>
        <div className={styles.info}>
          <div className={styles.description}>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.price}>${data.price}</span>
          </div>
          <Counter value={data.count} />
        </div>
      </Link>
    </li>
  );
};

export default ItemCard;
