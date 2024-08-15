import { debounce } from "lodash";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearchInput = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    },
    500
  );

  return (
    <div
      className={styles.searchBar}
      role="search"
      aria-labelledby="searchFormLabel"
    >
      <label htmlFor="searchInput" id="searchFormLabel" className="hidden">
        search in catalog by title
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search by title"
        aria-label="search in catalog by title"
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default SearchBar;
