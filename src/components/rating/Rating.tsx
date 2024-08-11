import styles from "./Rating.module.scss";
import setRating from "../../utils/setRating";
import { starIcon } from "../../assets/icons";

interface RatingProps {
  value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  const stars = setRating(value);

  const ratingLabel = `Rating: ${value} out of 5`;

  return (
    <div className={styles.rating} role="img" aria-label={ratingLabel}>
      {stars.map((star, i) => (
        <span
          key={i}
          className={star == "active" ? `${styles.active}` : ""}
          aria-hidden="true"
        >
          {starIcon}
        </span>
      ))}
    </div>
  );
};

export default Rating;
