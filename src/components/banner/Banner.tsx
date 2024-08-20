import { HashLink } from "react-router-hash-link";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section
      className={`container ${styles.banner}`}
      aria-labelledby="banner-title"
      role="banner"
    >
      <div className={styles.wrapper}>
        <h1 className={styles.title} id="banner-title">
          Any products from famous brands
          <br />
          with worldwide delivery
        </h1>
        <p className={styles.description}>
          We sell smartphones, laptops, clothes, shoes <br />
          and many other products at low prices
        </p>
        <HashLink
          className="btn"
          to="/#catalog"
          aria-label="link to catalog section"
        >
          Go to shopping
        </HashLink>
      </div>
    </section>
  );
};

export default Banner;
