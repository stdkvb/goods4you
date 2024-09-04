import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./Header.module.scss";
import { cartIcon } from "../../assets/icons.tsx";

const Header = () => {
  let location = useLocation();
  return (
    <header className={`container ${styles.header}`} aria-label="header">
      <div className={styles.wrapper}>
        <NavLink to="/" aria-label="go to homepage" className={styles.logo}>
          Goods4you
        </NavLink>
        <nav className={styles.nav} aria-label="main navigation">
          <HashLink
            className="link"
            to="/#catalog"
            aria-label="go to catalog section"
            aria-current={location.hash === "#catalog" ? "page" : undefined}
          >
            Catalog
          </HashLink>
          <HashLink
            className="link"
            to="/#faq"
            aria-label="go to FAQ section"
            aria-current={location.hash === "#faq" ? "page" : undefined}
          >
            FAQ
          </HashLink>
          <NavLink
            className={`link ${styles.cart}`}
            to="/cart"
            aria-label="go to cart"
            aria-current={location.pathname === "/cart" ? "page" : undefined}
          >
            Cart
            {cartIcon}
            <span
              className={styles.cartCounter}
              aria-label="number of items in cart"
            >
              1
            </span>
          </NavLink>
          <NavLink
            className="link disabled"
            to="#"
            aria-label="user profile"
            aria-disabled="true"
          >
            Johnson Smith
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
