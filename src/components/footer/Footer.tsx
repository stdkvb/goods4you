import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`} aria-label="footer">
      <div className={styles.wrapper}>
        <NavLink to="/" aria-label="go to home page" className={styles.logo}>
          Goods4you
        </NavLink>
        <nav className={styles.nav}>
          <HashLink
            className="link"
            to="/#catalog"
            aria-label="go to catalog section"
          >
            Catalog
          </HashLink>
          <HashLink className="link" to="/#faq" aria-label="go to FAQ section">
            FAQ
          </HashLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
