import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./ProductCard.module.scss";
import { Product, CartState } from "../../types.ts";
import Counter from "../counter/Counter.tsx";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cartProduct = useSelector((state: { cart: CartState }) =>
    state.cart.products.find((product) => product.id === data.id)
  );

  const quantity = cartProduct ? cartProduct.quantity : 0;

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
          <Counter value={quantity} />
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
