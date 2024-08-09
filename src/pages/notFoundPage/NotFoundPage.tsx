import { Helmet } from "react-helmet-async";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | Goods4you</title>
      </Helmet>
      <div className={`container ${styles.notFound}`}>
        <span>404</span>
        <h1>Page not found :(</h1>
      </div>
    </>
  );
};

export default NotFoundPage;