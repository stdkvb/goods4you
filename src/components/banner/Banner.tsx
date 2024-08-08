import { HashLink } from "react-router-hash-link";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={`container ${styles.banner}`}>
      {/* <div className={styles.background}>Goods4you</div> */}
      <h2 className={styles.title}>
        Any products from famous brands
        <br />
        with worldwide delivery
      </h2>
      <p className={styles.description}>
        We sell smartphones, laptops, clothes, shoes <br />
        and many other products at low prices
      </p>
      <HashLink className="btn" to="/#catalog" aria-label="link to catalog">
        Go to shopping
      </HashLink>
    </section>
  );
};

export default Banner;
