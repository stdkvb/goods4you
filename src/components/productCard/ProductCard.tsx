import { Link } from "react-router-dom";

import styles from "./ProductCard.module.scss";
import { ProductCardProps } from "../../types.ts";
import Counter from "../counter/Counter.tsx";

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <li className={styles.card}>
      <Link
        to={`product/${data.id}`}
        className={styles.wrapper}
        aria-label={`view details for ${data.title}`}
      >
        <div className={styles.image}>
          <div className={styles.background}>
            <span>Show details</span>
          </div>
          <picture>
            <source srcSet={data.thumbnail} type="image/avif" />
            <source srcSet={data.thumbnail} type="image/webp" />
            <img src={data.thumbnail} alt={data.title} />
          </picture>
        </div>
        <div className={styles.info}>
          <div className={styles.description}>
            <span className={styles.name}>{data.title}</span>
            <span className={styles.price}>
              $
              {((data.price * (100 - data.discountPercentage)) / 100).toFixed(
                2
              )}
            </span>
          </div>
          <Counter id={data.id} className={styles.counter} />
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
