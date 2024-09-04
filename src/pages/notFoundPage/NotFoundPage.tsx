import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | Goods4you</title>
        <meta
          name="description"
          content="Sorry, the page you're looking for does not exist. Please check the URL or return to the homepage."
        />
      </Helmet>
      <section
        className={`container ${styles.notFound}`}
        aria-labelledby="not-found"
      >
        <span>404</span>
        <h1 id="not-found">Page not found :(</h1>
        <p>
          Sorry, the page you&#39;re looking for does not exist. Please check
          the URL or return to the{" "}
          <NavLink className="link" to="/">
            homepage
          </NavLink>
          .
        </p>
      </section>
    </>
  );
};

export default NotFoundPage;
