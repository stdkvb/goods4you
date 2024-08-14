import { Link } from "react-router-dom";

import styles from "./ItemCard.module.scss";
import { Product } from "../../types.ts";
import Counter from "../counter/Counter.tsx";

interface ItemCardProps {
  data: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
  return (
    <li
      className={`${styles.card} ${
        data.variant == "hover" ? styles.hover : ""
      }`}
    >
      <Link
        to={`product/${data.id}`}
        className={styles.wrapper}
        aria-label={`view details for ${data.name}`}
      >
        <div className={styles.image}>
          <div className={styles.background}>
            <span>Show details</span>
          </div>
          <picture>
            <source srcSet={data.imageUrlAvif} type="image/avif" />
            <source srcSet={data.imageUrlWebp} type="image/webp" />
            <img src={data.imageUrlPng} alt={data.name} />
          </picture>
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
