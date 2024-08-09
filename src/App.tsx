import { HelmetProvider, Helmet } from "react-helmet-async";

import Router from "./router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
        <title>Goods4you</title>
      </Helmet>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
