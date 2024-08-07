import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer} aria-label="footer">
      Footer
    </footer>
  );
};

export default Footer;
