import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { AuthState } from "../types";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/homePage/HomePage";
import ProductPage from "../pages/productPage/ProductPage";
import CartPage from "../pages/cartPage/CartPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import LoginPage from "../pages/loginPage/LoginPage";

const Router = () => {
  const loggedIn = useSelector(
    (state: { authSlice: AuthState }) => state.authSlice.loggedIn
  );

  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            <ProductPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route
        path="/login"
        element={loggedIn ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default Router;
