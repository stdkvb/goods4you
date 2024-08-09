import { Helmet } from "react-helmet-async";

import styles from "./ProductPage.module.scss";
import Rating from "../../components/rating/Rating";

const images = [
  "/src/assets/images/photo.png",
  "/src/assets/images/photo.png",
  "/src/assets/images/photo.png",
  "/src/assets/images/photo.png",
  "/src/assets/images/photo.png",
  "/src/assets/images/photo.png",
];

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
      </Helmet>
      <article className={`container ${styles.product}`}>
        <div className={styles.gallery}>
          <img src={images[0]} alt="product photo" />
          <div className={styles.previews}>
            {images.map((src, index) => (
              <img
                key={index}
                className={`${styles.preview} ${index == 0 && styles.active}`}
                src={src}
                alt={`product preview photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.general}>
            <h1>Essence Mascara Lash Princess</h1>
            <Rating value={4} />
            <span className={styles.categories}>
              electronics, selfie accessories
            </span>
          </div>
          <span className={styles.quantity}>In Stock - Only 5 left!</span>
          <p className={styles.description}>
            The Essence Mascara Lash Princess is a popular mascara known for its
            volumizing and lengthening effects. Achieve dramatic lashes with
            this long-lasting and cruelty-free formula.
          </p>
          <div className={styles.details}>
            <span>1 month warranty</span>
            <span>Ships in 1 month</span>
          </div>
          <div className={styles.actions}>
            <div className={styles.info}>
              <div className={styles.prices}>
                <span className={styles.price}>$7.17</span>
                <span className={styles.oldPrice}>$9.99</span>
              </div>
              <div className={styles.discount}>
                Your discount: <span>14.5%</span>
              </div>
            </div>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductPage;
