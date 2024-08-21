import { HelmetProvider, Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import { AuthState } from "./types";
import Router from "./router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const loggedIn = useSelector(
    (state: { authSlice: AuthState }) => state.authSlice.loggedIn
  );

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <Header />
      <main role="main">
        <Router />
      </main>
      {loggedIn && <Footer />}
    </HelmetProvider>
  );
}

export default App;
