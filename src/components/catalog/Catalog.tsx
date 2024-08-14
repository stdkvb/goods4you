import styles from "./Catalog.module.scss";
import SearchBar from "../searchBar/SearchBar";
import ItemCard from "../itemCard/ItemCard";
import data from "../../../data.json";
import { Product } from "../../types";

const Catalog = () => {
  return (
    <section
      id="catalog"
      className={`container ${styles.catalog}`}
      aria-labelledby="catalog-title"
    >
      <div className={styles.wrapper}>
        <h1 id="catalog-title">Catalog</h1>
        <SearchBar />
        <ul className={styles.list}>
          {data.catalogItems.map((item: Product) => (
            <ItemCard key={item.id} data={item} />
          ))}
        </ul>
        <button className="btn" aria-label="show more items in catalog">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Catalog;
