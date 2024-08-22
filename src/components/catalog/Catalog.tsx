import { useState, useEffect } from "react";

import styles from "./Catalog.module.scss";
import ProductCard from "../productCard/ProductCard";
import SearchBar from "../searchBar/SearchBar";
import Loader from "../loader/Loader";
import { Product } from "../../types";
import { useGetProductsQuery } from "../../store/api/productsApi";

const Catalog = () => {
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [skip, setSkip] = useState<number>(0);
  const { data, isLoading, error } = useGetProductsQuery({
    skip,
    search,
  });

  useEffect(() => {
    if (data && data.products) {
      setCatalog((prevCatalog) =>
        skip === 0 ? data.products : [...prevCatalog, ...data.products]
      );
    }
  }, [data]);

  const handleSearch = (query: string) => {
    setSkip(0);
    setSearch(query);
  };

  const showMore = () => {
    setSkip((prevSkip) => prevSkip + 12);
  };

  return (
    <section
      id="catalog"
      className={`container ${styles.catalog}`}
      aria-labelledby="catalog-title"
    >
      <div className={styles.wrapper}>
        <h2 id="catalog-title">Catalog</h2>
        <SearchBar onSearch={handleSearch} />
        {isLoading && <Loader />}
        {error && (
          <span className={styles.message}>
            Error occurred, try again later.
          </span>
        )}
        {!isLoading && data?.total == 0 && (
          <span className={styles.message}>No products found</span>
        )}
        <ul className={styles.list}>
          {!isLoading &&
            catalog.map((item: Product) => (
              <ProductCard key={item.id} data={item} />
            ))}
        </ul>
        {!isLoading && catalog.length < (data?.total || 0) && (
          <button
            className="btn"
            aria-label="show more items in catalog"
            onClick={showMore}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default Catalog;
