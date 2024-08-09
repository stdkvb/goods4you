import styles from "./Rating.module.scss";
import setRating from "../../utils/setRating";
import { starIcon } from "../../assets/icons";

interface RatingProps {
  value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  const stars = setRating(value);

  return (
    <div className={styles.rating}>
      {stars.map((star, i) => (
        <div key={i} className={star == "active" ? `${styles.active}` : ""}>
          {starIcon}
        </div>
      ))}
    </div>
  );
};

export default Rating;
