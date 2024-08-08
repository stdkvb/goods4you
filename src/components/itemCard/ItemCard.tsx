import { Link } from "react-router-dom";

import styles from "./ItemCard.module.scss";
import { catalogItem } from "../../types.ts";
import { cartIcon, minusIcon, plusIcon } from "../../assets/icons.tsx";

interface ItemCardProps {
  data: catalogItem;
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.stopPropagation();
  e.preventDefault();
};

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
          <div className={styles.counter}>
            {data.count ? (
              <>
                <button
                  className="btn btn_icon"
                  onClick={handleClick}
                  aria-label="add to cart"
                >
                  {minusIcon}
                </button>
                <span className={styles.count}>{`${data.count} item${
                  data.count > 1 ? "s" : ""
                }`}</span>
                <button
                  className="btn btn_icon"
                  onClick={handleClick}
                  aria-label="add to cart"
                >
                  {plusIcon}
                </button>
              </>
            ) : (
              <button
                className="btn btn_icon"
                onClick={handleClick}
                aria-label="add to cart"
              >
                {cartIcon}
              </button>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ItemCard;
