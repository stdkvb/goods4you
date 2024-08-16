import styles from "./ProductGallery.module.scss";

const ProductGallery = ({
  images,
  activeIndex,
  onImageClick,
}: {
  images: string[];
  activeIndex: number;
  onImageClick: (index: number) => void;
}) => {
  return (
    <section className={styles.gallery}>
      <picture>
        <source srcSet={images[activeIndex]} type="image/avif" />
        <source srcSet={images[activeIndex]} type="image/webp" />
        <img
          className={styles.image}
          src={images[activeIndex]}
          alt="product"
          aria-live="polite"
        />
      </picture>
      <div className={styles.previews}>
        {images.length > 1 &&
          images.map((el, index) => (
            <picture key={index}>
              <source srcSet={el} type="image/avif" />
              <source srcSet={el} type="image/webp" />
              <img
                className={`${styles.preview} ${
                  index === activeIndex ? styles.active : ""
                }`}
                src={el}
                alt={`preview ${index + 1} of product`}
                onClick={() => onImageClick(index)}
              />
            </picture>
          ))}
      </div>
    </section>
  );
};

export default ProductGallery;
