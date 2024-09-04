import { Helmet } from "react-helmet-async";

import Banner from "../../components/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import FAQ from "../../components/faq/FAQ";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
      </Helmet>
      <Banner />
      <Catalog />
      <FAQ />
    </>
  );
};

export default HomePage;
