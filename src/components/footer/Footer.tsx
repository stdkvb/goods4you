import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./Footer.module.scss";
import logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`} aria-label="footer">
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
      </nav>
    </footer>
  );
};

export default Footer;
