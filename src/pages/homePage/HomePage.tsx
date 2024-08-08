import { Helmet } from "react-helmet-async";

import Banner from "../../components/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import FAQ from "../../components/faq/FAQ";

type Props = {};

const HomePage = (props: Props) => {
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
      <Catalog />
      <FAQ />
    </>
  );
};

export default HomePage;
