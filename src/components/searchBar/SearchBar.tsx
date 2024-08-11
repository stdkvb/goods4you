import styles from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className={styles.searchBar}
      role="search"
      aria-labelledby="searchFormLabel"
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchInput" id="searchFormLabel" className="hidden">
        search in catalog by title
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search by title"
        aria-label="search in catalog by title"
      />
      <button type="submit" className="hidden">
        submit search
      </button>
    </form>
  );
};

export default SearchBar;
