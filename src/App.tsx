import { HelmetProvider, Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "./store/store";
import { UserState } from "./types";
import { setUser } from "./store/slices/userSlice";
import Loader from "./components/loader/Loader";
import Router from "./router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useGetUserQuery } from "./store/api/authApi";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const savedToken = localStorage.getItem("authToken");
  const [tokenChecked, setTokenChecked] = useState(!savedToken);

  const { data, isLoading, error } = useGetUserQuery(undefined, {
    skip: !savedToken,
  });

  useEffect(() => {
    if (error) {
      localStorage.removeItem("authToken");
      dispatch(setUser({ loggedIn: false }));
      navigate("/login");
      setTokenChecked(true);
    }

    if (data) {
      dispatch(
        setUser({
          loggedIn: true,
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
        })
      );
      setTokenChecked(true);
    }
  }, [data, error, navigate, dispatch]);

  const loggedIn = useSelector(
    (state: { userSlice: UserState }) => state.userSlice.loggedIn
  );

  if (isLoading || !tokenChecked) {
    return <Loader />;
  }

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
