import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./ProductPage.module.scss";
import Rating from "../../components/rating/Rating";
import { useGetProductByIdQuery } from "../../store/api/productsApi";
import Loader from "../../components/loader/Loader";
import Counter from "../../components/counter/Counter";
import ProductGallery from "../../components/productGallery/ProductGallery";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useGetProductByIdQuery({ id });

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  if (isLoading) return <Loader />;

  if (error || !data) {
    navigate("/not-found");
  }

  if (data)
    return (
      <>
        <Helmet>
          <title>{data.title} | Goods4you</title>
        </Helmet>
        <div className={`container ${styles.product}`}>
          <article className={styles.wrapper}>
            <ProductGallery
              images={data.images}
              activeIndex={activeIndex}
              onImageClick={handleImageClick}
            />
            <section className={styles.content} aria-labelledby="product">
              <div className={styles.general}>
                <h1 id="product">{data.title}</h1>
                <Rating value={Math.round(data.rating)} />
                <span className={styles.categories}>
                  {data.tags.join(", ")}
                </span>
              </div>
              <span className={styles.quantity}>
                {data.availabilityStatus}
                {data.stock > 0 && ` - Only ${data.stock} left!`}
              </span>
              <p className={styles.description}>{data.description}</p>
              <div className={styles.details}>
                <span>{data.warrantyInformation}</span>
                <span>{data.shippingInformation}</span>
              </div>
              <div className={styles.actions}>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <span className={styles.price}>
                      $
                      {(
                        (data.price * (100 - data.discountPercentage)) /
                        100
                      ).toFixed(2)}
                    </span>
                    <span className={styles.oldPrice}>${data.price}</span>
                  </div>
                  <div className={styles.discount}>
                    Your discount: <span>{data.discountPercentage}%</span>
                  </div>
                </div>
                <Counter
                  id={data.id}
                  buttonText="Add to cart"
                  stock={data.stock}
                />
              </div>
            </section>
          </article>
        </div>
      </>
    );
};

export default ProductPage;
