import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <input
        id="searchInput"
        type="text"
        placeholder="Search by title"
        aria-label="search in catalog by title"
      />
    </form>
  );
};

export default SearchBar;
