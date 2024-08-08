import { Helmet } from "react-helmet-async";

import styles from "./HomePage.module.scss";
import Banner from "../../components/banner/Banner";

type Props = {};

export const HomePage = (props: Props) => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
        <title>Catalog | Goods4you</title>
      </Helmet>
      <Banner />
    </>
  );
};
