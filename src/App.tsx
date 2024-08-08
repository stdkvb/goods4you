import { HelmetProvider } from "react-helmet-async";

import Router from "./router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <HelmetProvider>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
