import { HelmetProvider, Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "./store/store";
import { AuthState } from "./types";
import { setToken, clearToken } from "./store/slices/authSlice";
import { setUser } from "./store/slices/userSlice";
import Router from "./router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useGetUserQuery } from "./store/api/userApi";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loadingToken, setLoadingToken] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");

    if (savedToken) {
      dispatch(setToken(savedToken));
      setLoadingToken(false);
    } else {
      setLoadingToken(false);
      navigate("/login");
    }
  }, [dispatch, navigate]);

  const loggedIn = useSelector(
    (state: { authSlice: AuthState }) => state.authSlice.loggedIn
  );

  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useGetUserQuery(undefined, {
    skip: !loggedIn || loadingToken,
  });

  useEffect(() => {
    if (userError && !loadingToken) {
      localStorage.removeItem("authToken");
      dispatch(clearToken(undefined));
      navigate("/login");
    }

    if (userData) {
      dispatch(
        setUser({ firstName: userData.firstName, lastName: userData.lastName })
      );
    }
  }, [userData, userError, navigate, dispatch, loadingToken]);

  if (loadingToken || userLoading) {
    return <span>Loading...</span>;
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
