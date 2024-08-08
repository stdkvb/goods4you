import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./Header.module.scss";
import logo from "../../assets/images/Logo.svg";
import { cartIcon } from "../../assets/icons.tsx";

const Header = () => {
  return (
    <header className={`container ${styles.header}`} aria-label="header">
      <NavLink to="/" aria-label="logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav className={styles.nav}>
        <HashLink className="link" to="/#catalog" aria-label="catalog">
          Catalog
        </HashLink>
        <HashLink className="link" to="/#faq" aria-label="FAQ">
          FAQ
        </HashLink>
        <NavLink className={`link ${styles.cart}`} to="/cart" aria-label="cart">
          Cart
          {cartIcon}
          <span className={styles.cartCounter} aria-label="items counter">
            1
          </span>
        </NavLink>
        <NavLink className="link" to="#" aria-label="profile">
          Johnson Smith
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
