import { Helmet } from "react-helmet-async";

import styles from "./ProductPage.module.scss";
import Rating from "../../components/rating/Rating";

const images = [
  {
    imageUrlAvif: "/src/assets/images/photo.avif",
    imageUrlWebp: "/src/assets/images/photo.webp",
    imageUrlPng: "/src/assets/images/}photo.png",
  },
  {
    imageUrlAvif: "/src/assets/images/photo.avif",
    imageUrlWebp: "/src/assets/images/photo.webp",
    imageUrlPng: "/src/assets/images/}photo.png",
  },
  {
    imageUrlAvif: "/src/assets/images/photo.avif",
    imageUrlWebp: "/src/assets/images/photo.webp",
    imageUrlPng: "/src/assets/images/}photo.png",
  },
  {
    imageUrlAvif: "/src/assets/images/photo.avif",
    imageUrlWebp: "/src/assets/images/photo.webp",
    imageUrlPng: "/src/assets/images/}photo.png",
  },
  {
    imageUrlAvif: "/src/assets/images/photo.avif",
    imageUrlWebp: "/src/assets/images/photo.webp",
    imageUrlPng: "/src/assets/images/}photo.png",
  },
  {
    imageUrlAvif: "/src/assets/images/photo.avif",
    imageUrlWebp: "/src/assets/images/photo.webp",
    imageUrlPng: "/src/assets/images/}photo.png",
  },
];

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
      </Helmet>
      <div className={`container ${styles.product}`}>
        <article className={styles.wrapper}>
          <section className={styles.gallery}>
            <picture>
              <source srcSet={images[0].imageUrlAvif} type="image/avif" />
              <source srcSet={images[0].imageUrlWebp} type="image/webp" />
              <img
                src={images[0].imageUrlPng}
                alt="product"
                aria-live="polite"
              />
            </picture>
            <div className={styles.previews}>
              {images.map((el, index) => (
                <picture key={index}>
                  <source srcSet={el.imageUrlAvif} type="image/avif" />
                  <source srcSet={el.imageUrlWebp} type="image/webp" />
                  <img
                    className={`${styles.preview} ${
                      index == 0 && styles.active
                    }`}
                    src={el.imageUrlPng}
                    alt={`preview ${index + 1} of product`}
                  />
                </picture>
              ))}
            </div>
          </section>
          <section className={styles.content} aria-labelledby="product">
            <div className={styles.general}>
              <h1 id="product">Essence Mascara Lash Princess</h1>
              <Rating value={4} />
              <span className={styles.categories}>
                electronics, selfie accessories
              </span>
            </div>
            <span className={styles.quantity}>In Stock - Only 5 left!</span>
            <p className={styles.description}>
              The Essence Mascara Lash Princess is a popular mascara known for
              its volumizing and lengthening effects. Achieve dramatic lashes
              with this long-lasting and cruelty-free formula.
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
              <button className="btn" aria-label="add product to cart">
                Add to cart
              </button>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default ProductPage;
