import styles from "./Catalog.module.scss";
import SearchBar from "../searcBar/SearchBar";
import ItemCard from "../itemCard/ItemCard";
import data from "../../../data.json";
import { catalogItem } from "../../types";

const Catalog = () => {
  return (
    <section id="catalog" className={`container ${styles.catalog}`}>
      <h1>Catalog</h1>
      <SearchBar />
      <ul className={styles.list}>
        {data.catalogItems.map((item: catalogItem) => (
          <ItemCard key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
