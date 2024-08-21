import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { AuthState } from "../types";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const loggedIn = useSelector(
    (state: { authSlice: AuthState }) => state.authSlice.loggedIn
  );

  return loggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
